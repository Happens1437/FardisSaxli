// Shared by every page: navbar, mobile menu, consultation modal

// Navbar scroll effect (pages without a hero set data-solid to keep it opaque)
const navbar = document.getElementById('navbar');
function updateNavbar() {
    if (window.scrollY > 50 || navbar.hasAttribute('data-solid')) {
        navbar.classList.remove('bg-transparent', 'py-6');
        navbar.classList.add('bg-matte-black', 'shadow-lg', 'py-4');
    } else {
        navbar.classList.add('bg-transparent', 'py-6');
        navbar.classList.remove('bg-matte-black', 'shadow-lg', 'py-4');
    }
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

// Modal Logic
const modal = document.getElementById('bookingModal');
const modalContent = document.getElementById('modalContent');
const formContainer = document.getElementById('bookingFormContainer');
const successMsg = document.getElementById('successMessage');
const form = document.getElementById('consultationForm');

function openModal() {
    modal.classList.remove('hidden');
    // Reset to form view in case it was previously submitted
    formContainer.classList.remove('hidden');
    successMsg.classList.add('hidden');
    form.reset();

    // Animation reset
    modalContent.classList.remove('modal-leave', 'modal-leave-active');
    modalContent.classList.add('modal-enter');
    setTimeout(() => {
        modalContent.classList.add('modal-enter-active');
    }, 10);
}

function closeModal() {
    modalContent.classList.remove('modal-enter', 'modal-enter-active');
    modalContent.classList.add('modal-leave');
    setTimeout(() => {
        modalContent.classList.add('modal-leave-active');
    }, 10);

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300); // Wait for animation to finish
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// TODO: send the request somewhere real (Formspree / Web3Forms / Telegram bot).
// For now it only shows the success message.
function submitForm(e) {
    e.preventDefault(); // Prevent page reload

    // Hide form, show success message
    formContainer.classList.add('hidden');
    successMsg.classList.remove('hidden');
}

// Footer year
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
