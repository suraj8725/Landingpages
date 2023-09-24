const scrollRevealOption = { 
    distance: "50px", 
    origin: "bottom", 
    duration: 1000, 
  }; 
   
  // header container 
  ScrollReveal().reveal(".header__container img", { 
    duration: 1000, 
  }); 
   
  ScrollReveal().reveal(".header__container h1", { 
    ...scrollRevealOption, 
    delay: 500, 
  }); 
   
  ScrollReveal().reveal(".header__container p", { 
    ...scrollRevealOption, 
    delay: 1000, 
  }); 
   
  ScrollReveal().reveal(".header__btns", { 
    ...scrollRevealOption, 
    delay: 1500, 
  }); 
   
  // about container 
  ScrollReveal().reveal(".about__image img", { 
    ...scrollRevealOption, 
    origin: "left", 
  }); 
   
  ScrollReveal().reveal(".about__content h3", { 
    ...scrollRevealOption, 
    delay: 500, 
  }); 
   
  ScrollReveal().reveal(".aboutcontent .sectionheader", { 
    ...scrollRevealOption, 
    delay: 1000, 
  }); 
   
  ScrollReveal().reveal(".aboutcontent .sectionsubheader", { 
    ...scrollRevealOption, 
    delay: 1500, 
  }); 
   
  ScrollReveal().reveal(".aboutcontent .aboutgrid", { 
    ...scrollRevealOption, 
    delay: 2000, 
  }); 
   
  // contact container 
  ScrollReveal().reveal(".contact__image img", { 
    ...scrollRevealOption, 
    origin: "left", 
  }); 
   
  const swiper = new Swiper(".swiper", { 
    loop: true, 
    slidesPerView: "auto", 
    centeredSlides: true, 
    spaceBetween: 30, 
  });