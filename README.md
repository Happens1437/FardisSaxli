# ფარდის სახლი — website

Static site (HTML + Tailwind CDN + vanilla JS). No build step.

```
index.html              home: hero, advantages, collections, partners slider, CTA, contact
gallery.html            gallery: category tabs, grid, lightbox  (gallery.html#karnizebi etc.)
data/gallery.js         ← all gallery photos + partner logos live here
assets/css/styles.css   custom styles (slider, gallery, modals)
assets/js/site.js       navbar, mobile menu, consultation form (shared)
assets/js/home.js       builds collection cards + partner slider
assets/js/gallery.js    gallery + lightbox
assets/img/             hero background, logos
tools/serve.ps1         local preview server  → http://localhost:8080
tools/download-images.ps1  copies all photos off Wix into images/
```

## Preview locally

```
powershell -ExecutionPolicy Bypass -File tools\serve.ps1
```

## Photos

Right now photos load straight from the old Wix site's CDN (`IMAGE_SOURCE = 'wix'`).
That stops working once the Wix plan is cancelled, so before launch:

1. `powershell -ExecutionPolicy Bypass -File tools\download-images.ps1`
2. In `data/gallery.js` set `window.IMAGE_SOURCE = 'local'`

Adding a photo = drop the file into `images/gallery/<category>/thumb` and `/large`, add its name to that
category's `photos` list. Change a category's cover image with `cover: <index>`.

## TODO

- Consultation form only shows a "thank you" — connect it to Formspree / Web3Forms / a Telegram bot.
- TikTok link in the footer points to tiktok.com — replace with the real profile URL.
- For production, swap the Tailwind CDN for a compiled CSS file.

## Favicon

The letter "ფ" cut from the logo (`assets/img/logo-full-red.png`). Regenerate with
`powershell -ExecutionPolicy Bypass -File tools\make-favicons.ps1 -Style red` (or `dark` / `full`).
