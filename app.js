const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
document.querySelectorAll('a[href^="#"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      const id = el.getAttribute('href')?.slice(1)
      if (!id) return
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
requestAnimationFrame(raf)
const burger = document.querySelector('.burger');
const closeNav = document.querySelector('.close');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav .links');

burger.addEventListener('click', () => {
    mobileNav.classList.toggle('come-in');

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