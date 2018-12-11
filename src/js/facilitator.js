$(function () {
  var $header = $('#header')
  $(window).scroll(function () {
    if($(this).scrollTop()>65){
      $header.addClass('on')
    }else{
      $header.removeClass('on')
    }
  })
})
