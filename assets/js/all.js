"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $(function () {
    $("#from").datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function onClose(selectedDate) {
        $("#to").datepicker("option", "minDate", selectedDate);
      }
    });
    $("#to").datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      onClose: function onClose(selectedDate) {
        $("#from").datepicker("option", "maxDate", selectedDate);
      }
    });
  });
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});
//# sourceMappingURL=all.js.map
