// Gallery page: category tabs, paged masonry grid, lightbox

const PAGE_SIZE = 24;

const tabsEl = document.getElementById('galleryTabs');
const gridEl = document.getElementById('galleryGrid');
const titleEl = document.getElementById('galleryTitle');
const descEl = document.getElementById('galleryDesc');
const countEl = document.getElementById('galleryCount');
const moreBtn = document.getElementById('loadMore');

let current = null;   // active category object
let shown = 0;        // how many photos of it are rendered

function categoryFromHash() {
    const slug = decodeURIComponent(location.hash.slice(1));
    return GALLERY.find(c => c.slug === slug) || GALLERY[0];
}

function renderTabs() {
    tabsEl.innerHTML = GALLERY.map(cat => `
        <a href="#${cat.slug}" role="tab" aria-selected="${cat === current}" data-slug="${cat.slug}"
           class="gallery-tab flex-none border border-gray-700 text-gray-300 hover:border-brand-red hover:text-white px-5 py-2 text-sm font-light transition-colors whitespace-nowrap">
            ${cat.title} <span class="opacity-60 ml-1">${cat.photos.length}</span>
        </a>`).join('');
    tabsEl.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest', inline: 'center' });
}

function showCategory(cat) {
    current = cat;
    shown = 0;
    gridEl.innerHTML = '';
    titleEl.textContent = cat.title;
    descEl.textContent = cat.description;
    countEl.textContent = cat.photos.length + ' ფოტო';
    document.title = cat.title + ' | გალერეა | ფარდის სახლი';
    renderTabs();
    renderMore();
}

function renderMore() {
    const folder = 'gallery/' + current.slug;
    const next = current.photos.slice(shown, shown + PAGE_SIZE);
    const html = next.map((file, i) => `
        <button type="button" class="gallery-item" data-index="${shown + i}" aria-label="${current.title} — ფოტო ${shown + i + 1}">
            <img src="${imageUrl(file, 700, folder)}" alt="${current.title}" loading="lazy" onload="this.classList.add('loaded')">
        </button>`).join('');
    gridEl.insertAdjacentHTML('beforeend', html);
    shown += next.length;
    moreBtn.classList.toggle('hidden', shown >= current.photos.length);
    moreBtn.querySelector('span').textContent = `(${current.photos.length - shown})`;
}

moreBtn.addEventListener('click', renderMore);

gridEl.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) openLightbox(Number(item.dataset.index));
});

window.addEventListener('hashchange', () => {
    showCategory(categoryFromHash());
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- Lightbox ----------
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightboxImg');
const lbCounter = document.getElementById('lightboxCounter');
let lbIndex = 0;

function largeUrl(i) {
    return imageUrl(current.photos[i], 1800, 'gallery/' + current.slug);
}

function setLightbox(i) {
    const n = current.photos.length;
    lbIndex = (i + n) % n;
    lbImg.style.opacity = 0;
    lbImg.onload = () => { lbImg.style.opacity = 1; };
    lbImg.src = largeUrl(lbIndex);
    lbImg.alt = current.title + ' — ფოტო ' + (lbIndex + 1);
    lbCounter.textContent = (lbIndex + 1) + ' / ' + n;
    // Preload neighbours so arrows feel instant
    [lbIndex + 1, lbIndex - 1].forEach(j => { new Image().src = largeUrl((j + n) % n); });
}

function openLightbox(i) {
    setLightbox(i);
    lb.classList.remove('hidden');
    lb.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lb.classList.add('hidden');
    lb.classList.remove('flex');
    document.body.style.overflow = '';
}

document.getElementById('lightboxPrev').addEventListener('click', () => setLightbox(lbIndex - 1));
document.getElementById('lightboxNext').addEventListener('click', () => setLightbox(lbIndex + 1));
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lb.addEventListener('click', (e) => { if (e.target === lb || e.target.id === 'lightboxStage') closeLightbox(); });

document.addEventListener('keydown', (e) => {
    if (lb.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') setLightbox(lbIndex - 1);
    if (e.key === 'ArrowRight') setLightbox(lbIndex + 1);
});

// Swipe on phones
let touchX = null;
lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) setLightbox(lbIndex + (dx < 0 ? 1 : -1));
    touchX = null;
});

showCategory(categoryFromHash());
