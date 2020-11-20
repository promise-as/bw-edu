charset = 'UTF-8';
$(function () {
  // 单选
  function radio(btn, classname) {
    $(btn).each(function () {
      $(this).click(function () {
        $(this).addClass(classname).siblings().removeClass(classname);
      });
    });
  }
  radio('.test .r-row span', 'on');
  // 提升的原因
  $('.test .btn').click(function(){
    $('#reason').val($('.test .r-row .on').text());
  });

  // 回到顶部
  $('.black-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});