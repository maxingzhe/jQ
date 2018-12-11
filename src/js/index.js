
$(document).ready(function () {
  new Swiper('.swiper-container',{
    pagination:{
      el:'.swiper-pagination',
      clickable:true
    },
    autoplay:true,
    loop:true
  });
})

$(function () {
  $.get('http://localhost:3000/index',function (data) {
    console.log(data);
    $('.list').append(template('class1',{data:data}));
    $('.box_warp').append(template('class2',{data:data}))
  });
  $.get('http://localhost:3000/hotCity',function (date) {
    console.log(date);
    $('.city_item').append(template('class3',{data:date}));
  });
  var $header = $('#header')
  $(window).scroll(function () {
    if($(this).scrollTop()>65){
      $header.addClass('on')
    }else{
      $header.removeClass('on')
    }
  })
})

  
  
