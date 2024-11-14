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
      $(".nav").toggleClass("active")
      $(".nav a").toggleClass("active")
    })

  }
  });

// on hover content
document.addEventListener('DOMContentLoaded', function() {
  const items = [
      { selector: '.img1', title: 'Driver Do', description: 'Moving Vehicles on Autopilot' },
      { selector: '.img2', title: 'iDream Movies', description: 'Media application for iDream Media, one of India\'s top media agencies' },
      { selector: '.img3', title: 'Nistha Raj Official Website', description: 'Official website for the artist Nistha Raj' },
      { selector: '.img4', title: 'Ram Charan Official App', description: 'An Official mobile app for Mega Power Star Ram Charan.' },
      { selector: '.img5', title: 'Now Floats', description: 'Official Mobile App for Now Floats, designed for best performance' },
      { selector: '.img6', title: 'Indian Movie Cop', description: 'IMC - Indian Movie Cop for piracy control, associated with the American embassy' },
      { selector: '.img7', title: 'iDream Post', description: 'News Portal and mobile app for iDream Media' },
      { selector: '.img8', title: 'GGEMT', description: 'Medical Mobile Application for US brand GGEMT' }
  ];

  items.forEach(item => {
      const element = document.querySelector(item.selector);
      if (element) {
          element.addEventListener('mouseover', function() {
              if (!element.querySelector('.hover-content')) {
                  const hoverContent = document.createElement('div');
                  hoverContent.classList.add('hover-content');
                  hoverContent.innerHTML = `<h4 class="heading4">${item.title}</h4><h5 class="heading5">${item.description}</h5>`;
                  element.appendChild(hoverContent);
              }
          });
          element.addEventListener('mouseout', function() {
              const hoverContent = element.querySelector('.hover-content');
              if (hoverContent) element.removeChild(hoverContent);
          });
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const loadMoreBtn = document.getElementById('load-more-btn');
  const hiddenImages = document.querySelectorAll('.idea-all-images .img7, .idea-all-images .img8');

  loadMoreBtn.addEventListener('click', function() {
      hiddenImages.forEach(img => {
          img.style.display = 'block';
      });
      // Disable the button to prevent further clicks
      loadMoreBtn.disabled = true;
  });
});


  

