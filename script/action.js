$(function () {

  // 처음 로딩 시 모바일이면 brand 무조건 숨김
  if (window.innerWidth <= 830) {
    $(".brand").hide();
  }

  // 햄버거 클릭
  $("header .more").click(function () {

    $(this).toggleClass("on");

    // 모바일: 메뉴만 토글 + brand는 강제 숨김
    if (window.innerWidth <= 830) {
      $(".brand").hide(); 
      $("header nav .gnb").stop().slideToggle();
      return;
    }

    // PC: brand 토글
    $(".brand").stop().fadeToggle();
  });

  // 화면 크기 변경될 때도 처리
  $(window).resize(function () {
    if (window.innerWidth <= 830) {
      $(".brand").hide();
    }
  });

});
