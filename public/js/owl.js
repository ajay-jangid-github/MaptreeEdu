//Owl-Carousel - Home hero card
var owl = $('.service-card-prb');
owl.owlCarousel({
  items: 4,
  loop: true,
  autoplay: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 1
    },
    520: {
      items: 2
    },
    768: {
      items: 3
    },
    1200: {
      items: 3
    },
    1400: {
      items: 3
    },
    1600: {
      items: 3
    },
  }
});

//Owl-Carousel - Home testimonial
var owl = $('.testimonial-card-a');
owl.owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    1024: {
      items: 1
    },
    1400: {
      items: 1
    }
  }
});

//Owl-Carousel - video testimonial
var owl = $('.video-testimonials');
owl.owlCarousel({
  items: 2,  
  nav: false,
  dots: false,
  autoplay: false,
  autoplayTimeout: 3500,  
  smartSpeed: 1500,
  margin: 20,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 2
    },
    1400: {
      items: 2
    }
  }
});

//Owl-Carousel - case-study
var owl = $('.project-screens');
owl.owlCarousel({
  items: 4,
  loop: true,
  autoplay: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 1
    },
    520: {
      items: 2
    },
    768: {
      items: 3
    },
    1200: {
      items: 3
    },
    1400: {
      items: 3
    },
    1600: {
      items: 3
    },
  }
}); 

 //Owl-Carousel -portfolio slide 
var owl = $('.porto-slide');
owl.owlCarousel({ 
  items:1,  
  loop: true,
  autoplay: true,
  margin: 10,
  nav: false,
  dots: true,
  stagePadding: 50,
  autoplayTimeout: 350000,
  autoplayHoverPause: true,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 1,
      stagePadding:0
    },
    520: {
       items: 1,
      stagePadding:0
    },
    768: {
       items: 1,
      stagePadding:0
    },
    1200: {
      items: 1
    },
    1400: {
      items: 1
    },
    1600: {
      items: 1
    },
  }
}); 

  //Owl-Carousel -single slide
var owl = $('.single-slide');
owl.owlCarousel({ 
  items:1,  
  loop: true,
  autoplay: true,
  margin: 10,
  nav: false,
  dots: true,
  stagePadding: 100,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
  smartSpeed: 2000,
   responsive: {
    0: {
      items: 1,
      stagePadding:0
    },
    520: {
       items: 1,
      stagePadding:0
    },
    768: {
       items: 1,
      stagePadding:0
    },
    1200: {
      items: 1
    },
    1400: {
      items: 1
    },
    1600: {
      items: 1
    },
  }
});

//Owl-Carousel - app page bages-slider
var owl = $('.bages-slider');
owl.owlCarousel({
  items: 4,
  loop: true,
  autoplay: true,
  centre:true,
  margin: 20,
  nav: false,
  dots: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 2
    },
    520: {
      items: 3
    },
    768: {
      items: 3
    },
    1200: {
      items: 3
    },
    1400: {
      items: 4
    },
    1600: {
      items: 4
    },
  }
});

//Owl-Carousel - app page bages-slider
var owl = $('.logo-weworkfor');
owl.owlCarousel({
  items: 4,
  loop: true,
  autoplay: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplayTimeout: 1800,
  autoplayHoverPause: false,
  smartSpeed: 2000,
  responsive: {
    0: {
      items: 3
    },
    520: {
      items: 3
    },
    768: {
      items: 4
    },
    1200: {
      items: 4
    },
    1400: {
      items: 5
    },
    1600: {
      items: 6
    },
  }
});

//  //Owl-Carousel - Home testimonial
var owl = $('.testimonial-card-b');
owl.owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: true,
  dotsContainer: "#testimonials-avatar",
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    1024: {
      items: 1
    },
    1400: {
      items: 1
    }
  }
});
