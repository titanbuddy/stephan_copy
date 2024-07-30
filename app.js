const burger = document.querySelector('.burger');
const closeNav = document.querySelector('.close');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav .links');

burger.addEventListener('click', () => {
    mobileNav.classList.add('come-in');

});
mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('come-in');
    })
})
closeNav.addEventListener('click', () => {
    mobileNav.classList.remove('come-in');

});
window.addEventListener('resize', (e) => {
    if (window.innerWidth > 900) {
        mobileNav.classList.remove('come-in');
    }
});