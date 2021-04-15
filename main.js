window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('whiteNav', window.scrollY > 0);
});