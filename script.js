const scroller = document.querySelector('.hero-scroller')

console.log(scroller)

function nextSlide() {
  scroller.scrollBy({ left: scroller.clientWidth, behavior: "smooth" });
}

setInterval(nextSlide, 3000);