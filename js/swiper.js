
          
        //  let qSlides = mySwiper.sliders.length;

         // mySwiper.params.speed = 3000;

          //mySwiper.update();

          //mySwiper.slideTo(2, 800);

         // on: {
           // init: function () {
            //    console.log('Слайдер запущен!');
           // },

           // slideChange: function() {
            //    console.log('Слайд переключен!');
           // }
        //  },

         // mySwiper.on ('slideChange', function () {
           // console.log('Слайд переключен');
          //}),
          
          
          let sliderBlock = document.querySelector('.swiper-slide');

          sliderBlock.addEventListener("mouseenter", function (e) {
            mySwiper.params.autoplay.disableOnInteraction = false;
            mySwiper.params.autoplay.delay =500;
            mySwiper.autoplay.start();
          });
          sliderBlock.addEventListener("mouseeleave", function (e) {
            mySwiper.autoplay.stop();
          })