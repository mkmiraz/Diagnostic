(function(){
    $(document).ready(function(){
        // NAVIGATION
        $('.bars').click(function(){
            $('.fa-bars-staggered').hide(250);
            $('.fa-xmark').show(250);
            $('.nav_area').fadeToggle(250);

        })
        
        $('.bars').click(function(){
            $('.fa-bars-staggered').show();
            $('.fa-xmark').hide();

        })



        var swiper = new Swiper(".benar_img_area", {
            direction: "vertical",
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
                delay: 6500,
                disableOnInteraction: false,
              },
          });

        $('.doctor_slider').owlCarousel({
            loop:true,
            autoplay:true,
            items:4,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1024:{
                    items:3
                },
                1200:{
                  items:3
                  },
                  1300:{
                    items:4
                    }
               }
              })

    // About slider owl-carousel here
    $('.about_slider').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        animateOut: "fadeOut",
        animateIn: "zoomIn",
    })


    $(".item_box").on("click", ".item_area",  function () {
        $(this).siblings().removeClass("active");

        $(this).toggleClass("active").next().slideToggle(250);
        
        $(".text").this.classList.toggle('active');
    });

    var mixer = mixitup('.page_doctor');
});
})(jQuery)


// HEADER EFECT BY SCROLL
window.onscroll = function() {navscroll()};


function navscroll() {
    let menu_bar = document.querySelector('.menu_bar');
    if (document.body.scrollTop >= 120 || document.documentElement.scrollTop >= 120) {
        menu_bar.classList.add('active_nav');
    }else{
        menu_bar.classList.remove('active_nav');
    }
}
