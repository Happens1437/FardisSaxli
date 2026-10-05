// Home page: collection cards + partners slider (both built from data/gallery.js)

// Collection cards — on desktop every row is one wide card + one normal card, zig-zagging
(function renderCollections() {
    const grid = document.getElementById('collectionsGrid');
    if (!grid) return;

    grid.innerHTML = GALLERY.map((cat, i) => {
        const wide = i % 4 === 0 || i % 4 === 3;
        const cover = cat.photos[cat.cover || 0];
        return `
            <a href="gallery.html#${cat.slug}" class="category-card ${wide ? 'lg:col-span-2' : ''} h-[340px] md:h-[400px] group block">
                <img src="${imageUrl(cover, wide ? 1200 : 800, 'gallery/' + cat.slug)}" alt="${cat.title}" loading="lazy" class="w-full h-full object-cover">
                <div class="absolute inset-0 category-overlay flex flex-col justify-end p-8">
                    <span class="text-white/70 text-xs tracking-[0.2em] uppercase mb-2 border-l-2 border-brand-red pl-2">${cat.photos.length} ფოტო</span>
                    <h3 class="text-2xl font-serif text-white mb-2">${cat.title}</h3>
                    <p class="text-gray-300 font-light md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">${cat.tagline}</p>
                </div>
            </a>`;
    }).join('');
})();

// Partners slider — the list is rendered twice so the CSS loop is seamless
(function renderPartners() {
    const track = document.getElementById('partnersTrack');
    if (!track) return;

    const logos = PARTNERS.map(file => `
        <div class="partner-logo">
            <img src="${imageUrl(file, 400, 'partners')}" alt="პარტნიორი კომპანია">
        </div>`).join('');
    track.innerHTML = logos + logos.replace(/alt="[^"]*"/g, 'alt="" aria-hidden="true"');

    // Keep a steady speed regardless of how many logos there are (~2.5s per logo)
    track.style.setProperty('--marquee-duration', (PARTNERS.length * 2.5) + 's');
})();
