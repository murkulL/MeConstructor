
// -------------------------------  bootstrap

const handleCarouselItems = () => {
  const carouselItem = document.querySelector('.plans .carousel-item');
  if (carouselItem) {
    const carouselItems = document.querySelectorAll('.plans .carousel-item');
    const mobileContainers = document.querySelectorAll('.mobile-container');

    if (window.innerWidth > 500) {
      mobileContainers.forEach((container) => {
        container.classList.remove('mobile-container');
      });
      carouselItems.forEach((item) => {
        item.classList.remove('active');
      });
    } else {
      carouselItem.classList.add('active');
      mobileContainers.forEach((container) => {
        container.classList.add('mobile-container');
      });
    }
  }
};

handleCarouselItems();
window.addEventListener('resize', handleCarouselItems);

// ------------------------------------------------------- owl carousel

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  dots: true,
  responsive:{
      0:{
          items:1
      },
      800:{
          items:2
      },
      1050:{
          items:3
      }
  }
})