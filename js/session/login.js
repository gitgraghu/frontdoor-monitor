$(document).ready(function() {
  $('#fullpage').fullpage({
      navigation: true,
      scrollingSpeed: 600,
      controlArrows: true,
      touchSensitivity: 10,
      autoScrolling:true,
      scrollBar:true,
      resize : false,
      sectionsColor : ['#990000','#282828','#F7F7F7','#990000','#FFCC00','#282828'],
  });
  $('#footer-login').click(function(){
    $.fn.fullpage.moveTo(1);
  });
  setupAboutUsBtn();
  $('#about-us').css('height',$("#about-us").find("span").height()+15+15);

  configureScrolling();
  $(window).resize(function() {
    configureScrolling();
  });
});

function isMobile(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  }
  return false;
}

function setupAboutUsBtn(){
  $('#about-us').click(function(){
    $.fn.fullpage.moveTo(2);
  });
}

function configureScrolling(){
  if($(window).width()<922 || isMobile()){
    $.fn.fullpage.moveTo(1);
    $.fn.fullpage.setAllowScrolling(false);
    $('#about-us').unbind("click");
    $('#about-us').css('display','none');
    $('#section2').css('display','none');
    $('#section3').css('display','none');
    $('#section4').css('display','none');
    $('#section5').css('display','none');
    $('#section6').css('display','none');
    $('#fp-nav').css('display','none');
  }
  else{
    $.fn.fullpage.setAllowScrolling(true);
    $('#about-us').bind("click");
    setupAboutUsBtn();
    $('#about-us').css('display','block');
    $('#about-us').css('display','block');
    $('#section2').css('display','block');
    $('#section3').css('display','block');
    $('#section4').css('display','block');
    $('#section5').css('display','block');
    $('#section6').css('display','block');
    $('#fp-nav').css('display','block');
  }
  if($(window).height()<500){
    $("body#container-main").css("overflow","scroll");
    $('#about-us').css('display','none');
  }
  else{
    $("body#container-main").css("overflow","hidden");
  }
}
