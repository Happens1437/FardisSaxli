# Builds the favicon set from the logo (assets/img/logo-full-red.png).
# The icon is the logo's first letter "ფ" — the whole wordmark is unreadable at 16–32px.
#
#   -Style dark   red ფ on a black tile
#   -Style red    white ფ on a red tile   (default — stands out in light and dark tabs)
#   -Style full   whole red logo on a black tile
#
# Writes assets/img/favicon-16.png, favicon-32.png, apple-touch-icon.png (180), icon-512.png
# Usage: powershell -ExecutionPolicy Bypass -File tools\make-favicons.ps1 [-Style dark|red|full] [-OutDir path]
param(
    [ValidateSet('dark', 'red', 'full')] [string]$Style = 'red',
    [string]$OutDir = (Join-Path (Split-Path $PSScriptRoot -Parent) 'assets\img')
)
Add-Type -AssemblyName System.Drawing

$logoPath = Join-Path (Split-Path $PSScriptRoot -Parent) 'assets\img\logo-full-red.png'
$logo = [System.Drawing.Bitmap]::FromFile($logoPath)

# Where "ფ" sits inside the logo (px). Right of x=164 is the hook into "ა"; below y=162 the
# joining stroke is merged with the letter, so it gets faded out instead (see Clean-Glyph).
$glyph = if ($Style -eq 'full') { [System.Drawing.Rectangle]::new(0, 0, $logo.Width, $logo.Height) }
         else { [System.Drawing.Rectangle]::new(0, 28, 164, 228) }
$fadeX = 146; $fadeY = 162 - 28; $fadeLen = 18   # in crop coordinates
$hookX = 154; $hookY1 = 138 - 28; $hookY2 = 161 - 28  # edge of the hook, erased

$black = [System.Drawing.Color]::FromArgb(10, 10, 10)
$red   = [System.Drawing.Color]::FromArgb(200, 16, 46)

# The logo file has a solid white outline around the red letters (made for white pages).
# Rebuild the glyph as a clean single-colour mask: how red a pixel is becomes its opacity.
# For the single letter, the stroke that joins "ა" fades out instead of ending in a hard cut.
function Clean-Glyph($src, $rect, $color, $fadeFrom) {
    $out = [System.Drawing.Bitmap]::new($rect.Width, $rect.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $crop = $src.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $full = [System.Drawing.Rectangle]::new(0, 0, $rect.Width, $rect.Height)
    $data = $crop.LockBits($full, 'ReadOnly', [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $n = $data.Stride * $rect.Height
    $px = [byte[]]::new($n)
    [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $px, 0, $n)
    $crop.UnlockBits($data)

    for ($y = 0; $y -lt $rect.Height; $y++) {
        for ($x = 0; $x -lt $rect.Width; $x++) {
            $i = $y * $data.Stride + $x * 4          # BGRA
            $redness = (255 - $px[$i + 1]) / 205.0   # green is ~50 on the red, ~254 on the white outline
            if ($redness -lt 0) { $redness = 0 } elseif ($redness -gt 1) { $redness = 1 }
            $a = $px[$i + 3] * $redness
            if ($fadeFrom -gt 0 -and $x -ge $hookX -and $y -ge $hookY1 -and $y -le $hookY2) { $a = 0 }
            if ($fadeFrom -gt 0 -and $x -gt $fadeFrom -and $y -ge $fadeY) { $a *= [Math]::Max(0, 1 - ($x - $fadeFrom) / $fadeLen) }
            $px[$i] = $color.B; $px[$i + 1] = $color.G; $px[$i + 2] = $color.R; $px[$i + 3] = [byte]$a
        }
    }
    $od = $out.LockBits($full, 'WriteOnly', [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    [System.Runtime.InteropServices.Marshal]::Copy($px, 0, $od.Scan0, $n)
    $out.UnlockBits($od); $crop.Dispose()
    $out
}

$logoRed = [System.Drawing.Color]::FromArgb(237, 50, 55)
$ink = if ($Style -eq 'red') { [System.Drawing.Color]::White } else { $logoRed }
$fade = if ($Style -eq 'full') { 0 } else { $fadeX }
$clean = Clean-Glyph $logo $glyph $ink $fade

function RoundRectPath($x, $y, $w, $h, $r) {
    $p = [System.Drawing.Drawing2D.GraphicsPath]::new(); $d = 2 * $r
    $p.AddArc($x, $y, $d, $d, 180, 90); $p.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
    $p.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90); $p.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
    $p.CloseFigure(); $p
}

function Render($size, $file, $rounded) {
    $bmp = [System.Drawing.Bitmap]::new($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = 'AntiAlias'; $g.InterpolationMode = 'HighQualityBicubic'; $g.PixelOffsetMode = 'HighQuality'

    $bg = if ($Style -eq 'red') { $red } else { $black }
    # iOS rounds the corners itself, so the touch icon gets a square background
    if ($rounded) { $g.FillPath([System.Drawing.SolidBrush]::new($bg), (RoundRectPath 0 0 $size $size ($size * 0.2))) }
    else { $g.Clear($bg) }

    # Fit the glyph into the tile with some padding, keeping its aspect ratio
    $pad = if ($Style -eq 'full') { 0.08 } else { 0.12 }
    $box = $size * (1 - 2 * $pad)
    $scale = [Math]::Min($box / $glyph.Width, $box / $glyph.Height)
    $w = $glyph.Width * $scale; $h = $glyph.Height * $scale
    $dest = [System.Drawing.RectangleF]::new(($size - $w) / 2, ($size - $h) / 2, $w, $h)

    $g.DrawImage($clean, $dest)

    $bmp.Save((Join-Path $OutDir $file), [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose()
    "$file ${size}px ($Style)"
}

Render 16  'favicon-16.png' $true
Render 32  'favicon-32.png' $true
Render 180 'apple-touch-icon.png' $false
Render 512 'icon-512.png' $true
$clean.Dispose(); $logo.Dispose()
