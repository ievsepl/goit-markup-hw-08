(() => {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  openMenuBtn.addEventListener('click', () => {
    // const expanded = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;

    // openMenuBtn.classList.toggle('is-open');
    // openMenuBtn.setAttribute('aria-expanded', expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
  closeMenuBtn.addEventListener('click', () => {
    // closeMenuBtn.classList.toggle('is-open');

    mobileMenuRef.classList.toggle('is-open');
  });
})();
