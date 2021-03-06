console.log('Hello!');



$(document).ready(() => {
  console.log('HesSchool Hello!');

  $(function() {
    $( "#from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });

  AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    // 重複輪播
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // star
  var html = "";
  for (var i = 0; i < 5; i++) {
    html += '<span class="material-icons text-primary01">star_rate</span>';
  }
  $(".star").append(html);

  
});


