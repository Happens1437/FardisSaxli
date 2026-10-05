# Downloads every gallery photo and partner logo listed in data/gallery.js from
# the old Wix site into images/, in two web-ready sizes:
#   images/gallery/<slug>/thumb/<file>   (max 700px)   - grid
#   images/gallery/<slug>/large/<file>   (max 1800px)  - lightbox
#   images/partners/thumb/<file>         (max 400px)   - slider
# Then set IMAGE_SOURCE = 'local' in data/gallery.js.
#
# Run from the project folder:  powershell -ExecutionPolicy Bypass -File tools\download-images.ps1

$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$data = Get-Content (Join-Path $root 'data\gallery.js') -Raw -Encoding UTF8

function Get-WixImage($file, $size, $dest) {
    if (Test-Path $dest) { return $false }
    New-Item -ItemType Directory -Force (Split-Path $dest) | Out-Null
    # No enc_auto here, so the file format matches its extension
    $url = "https://static.wixstatic.com/media/$file/v1/fit/w_$size,h_$size,q_85/$file"
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing
    return $true
}

$filePattern = "'(17c722_[^']+\.(?:jpe?g|png|gif))'"
$partnersAt = $data.IndexOf('window.PARTNERS')
$galleryPart = $data.Substring(0, $partnersAt)
$partnersPart = $data.Substring($partnersAt)

$jobs = @()
$blocks = [regex]::Split($galleryPart, "slug:\s*'") | Select-Object -Skip 1
foreach ($block in $blocks) {
    $slug = $block.Substring(0, $block.IndexOf("'"))
    foreach ($m in [regex]::Matches($block, $filePattern)) {
        $f = $m.Groups[1].Value
        $jobs += ,@($f, 700,  "images\gallery\$slug\thumb\$f")
        $jobs += ,@($f, 1800, "images\gallery\$slug\large\$f")
    }
}
foreach ($m in [regex]::Matches($partnersPart, $filePattern)) {
    $f = $m.Groups[1].Value
    $jobs += ,@($f, 400, "images\partners\thumb\$f")
}

$i = 0; $new = 0
foreach ($j in $jobs) {
    $i++
    Write-Progress -Activity 'Downloading images' -Status "$i / $($jobs.Count)" -PercentComplete ($i * 100 / $jobs.Count)
    if (Get-WixImage $j[0] $j[1] (Join-Path $root $j[2])) { $new++ }
}

$mb = [math]::Round(((Get-ChildItem (Join-Path $root 'images') -Recurse -File | Measure-Object Length -Sum).Sum / 1MB), 1)
Write-Host "Done: $new new files ($($jobs.Count) total), images/ is $mb MB."
Write-Host "Now set  window.IMAGE_SOURCE = 'local'  in data/gallery.js"
