// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide-box1');
// const totalSlides = slides.length;

// function showSlide(index) {
//   if (index >= totalSlides) {
//     currentIndex = 0;
//   } else if (index < 0) {
//     currentIndex = totalSlides - 1;
//   } else {
//     currentIndex = index;
//   }
//   const offset = -currentIndex * 100;
//   slides.forEach(slide => {
//     slide.style.transform = `translateX(${offset}%)`;
//   });
// }

// function nextSlide() {
//   showSlide(currentIndex + 1);
// }

// function prevSlide() {
//   showSlide(currentIndex - 1);
// }

// // Auto-slide every 3 seconds
// setInterval(nextSlide, 3000);

$(document).ready(function() {
    $('.testimonial-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slide-arrow slick-prev"><img src="img/prev_arrow.svg"/></button>',
      nextArrow: '<button class="slide-arrow slick-next"><img src="img/next_arrow.svg"/></button>',
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            dots: false,
            arrows: false,
            centerPadding: '25%'
          }
        }
      ]
    });

    if($(window).width() <= 700){
      $('.tab-header').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        centerPadding: '25%',
      });
  
      
  
      $("nav a").each(function(i){
        $(this).css({"transform": "translateX("+ (i * 30)+"px" +")"})
      })
        
      $(document).on("click", ".menu-btn", function(){
        $(this).toggleClass("active")
        $("nav").toggleClass("active")
        $("nav a").toggleClass("active")
      })
  
    }
  });
  
  

