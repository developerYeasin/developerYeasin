const btns = document.querySelector('.nav-btn');

btns.onmousemove = function(e){
    const x = e.pageX - btns.offsetLeft;
    const y = e.pageY - btns.offsetTop;
    btns.style.setProperty('--x', x + 'px');
    btns.style.setProperty('--y', y + 'px');
};
const main_btns = document.querySelectorAll('.main-btn');

main_btns.forEach(function(main_btn){
main_btn.onmousemove = function(ev){
    const x = ev.pageX - main_btn.offsetLeft;
    const y = ev.pageY - main_btn.offsetTop;
    main_btn.style.setProperty('--x', x + 'px');
    main_btn.style.setProperty('--y', y + 'px');
};
});

//typeing js

var typed = new Typed('.typing-animation', {
    strings: [
        "Web Developer",
        "<span class='red'>Web designer</span>",
        "<span class='blue'>Wp Expert</span>",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });


  // misitup


  var mixer = mixitup(".portfolio-items");
//   var mixer = mixitup(".gallery-all-item");

//testimonial_content
var testimonial_content = $(".testimonial-content");
testimonial_content.owlCarousel({
  loop: !0,
  center: !0,
  margin: 10,
  nav: !1,
  dots: !1,
  mouseDrag: !1,
  touchDrag: !1,
  autoplayTimeout: 4e3,
  smartSpeed: 600,
  responsive: { 0: { items: 1 }, 992: { items: 1 }, 1e3: { items: 1 } },
});
var testimonial_img = $(".testimonial-img");
testimonial_img.owlCarousel({
  loop: !0,
  center: !0,
  margin: 10,
  nav: !1,
  dots: !1,
  mouseDrag: !1,
  touchDrag: !1,
  autoplayTimeout: 4e3,
  smartSpeed: 600,
  responsive: { 0: { items: 1 }, 992: { items: 3 }, 1e3: { items: 3 } },
}),
  $(".review_next").on("click", function () {
    testimonial_content.trigger("next.owl.carousel");
  }),
  $(".review_pre").on("click", function () {
    testimonial_content.trigger("prev.owl.carousel");
  }),
  $(".review_next").on("click", function () {
    testimonial_img.trigger("next.owl.carousel");
  }),
  $(".review_pre").on("click", function () {
    testimonial_img.trigger("prev.owl.carousel");
  });


  // prising table
  $(".btn_cust").click(function () {
    $(this).addClass("active");
    $(this).siblings(".active").removeClass("active");
  });
  
$(".wpc").on('click', function () {
  $("#wp").show().addClass("animated slideInLeft");
  $("#wp").siblings().hide();
});
  
  $(".htc").on('click', function () {
    $("#ht").show().addClass("animated slideInUp");
    $("#ht").siblings().hide();
  });


  $(".tdc").on('click', function () {
    $("#td").show().addClass("animated slideInRight");
    $("#td").siblings().hide();
  });
  
  // 