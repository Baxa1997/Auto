
        
       $('.slider').slick ({
        slidesToShow:4,
        autoplay:true,
        arrows: false,
        dots:true,
        numbers:false,
        responsive: [
          {
            breakpoint:767.98,
            settings: {
              slidesToShow:2
            }
          },
          {
            breakpoint:991.98,
            settings: {
              slidesToShow:2
            }
          },
          {
            breakpoint:575.98,
            settings: {
              slidesToShow:1
            }
          },
          
          {
            breakpoint:1199.98,
            settings: {
              slidesToShow:3
            }
          },
          
        ]
    }); 
     

