$(document).scroll(function() {
    var scroll_top = $(document).scrollTop();
    var div_one_top = $('#about').position().top - 200;
    var div_two_top = $('#goal').position().top - 120;
    var div_three_top = $('#manifesto').position().top - 200;
    var div_four_top = $('#projects').position().top - 120;
    var div_five_top = $('#sponsors').position().top - 160;
    var div_six_top = $('#contact').position().top - 200;

    if (scroll_top > ($(window).height() - 100) && scroll_top < div_one_top) {
      //Home
      $('#aboutLink').css("background-color","transparent");
      $('#goalLink').css("background-color","transparent");
      $('#manifestoLink').css("background-color","transparent");

      $('#projectsLink').css("background-color","transparent");
      $('#sponsorsLink').css("background-color","transparent");
      $('#contactLink').css("background-color","transparent");

      $('.navbar-inverse').css("opacity","0");
      $('.navbar-inverse').css("pointer-events","none");
      $('.navbar-inverse').css("background-color","rgba(238,238,238,0.8)");
      $('.navbar-inverse').css("border-bottom-color","transparent");

      $('#v0').css("display","block");
      $('.emblem').css("display","block");

    } else if(scroll_top > div_one_top && scroll_top < div_two_top) {
        //About
        $('#aboutLink').css("background-color","#009BCF");
        $('#goalLink').css("background-color","transparent");
        $('#manifestoLink').css("background-color","transparent");

        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("opacity","1");
        $('.navbar-inverse').css("pointer-events","auto");
        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

        $('#v0').css("display","none");
        $('.emblem').css("display","none");

    } else if( scroll_top > div_two_top && scroll_top < div_three_top) {
        //Our Goal
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","#009BCF");
        $('#manifestoLink').css("background-color","transparent");

        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("opacity","1");
        $('.navbar-inverse').css("pointer-events","auto");
        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

        $('#v0').css("display","none");
        $('.emblem').css("display","none");

    } else if( scroll_top > div_three_top && scroll_top < div_four_top) {
        //Manifesto
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","transparent");
        $('#manifestoLink').css("background-color","#009BCF");
        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("opacity","1");
        $('.navbar-inverse').css("pointer-events","auto");
        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

        $('#v0').css("display","none");
        $('.emblem').css("display","none");

    } else if( scroll_top > div_four_top && scroll_top < div_five_top) {
        //Projects
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","transparent");
        $('#manifestoLink').css("background-color","transparent");
        $('#projectsLink').css("background-color","#009BCF");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("opacity","1");
        $('.navbar-inverse').css("pointer-events","auto");
        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

        $('#v0').css("display","none");
        $('.emblem').css("display","none");

    } else if( scroll_top > div_five_top && scroll_top < div_six_top) {
        //Sponsors
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","transparent");
        $('#manifestoLink').css("background-color","transparent");
        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","#009BCF");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("opacity","1");
        $('.navbar-inverse').css("pointer-events","auto");
        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

        $('#v0').css("display","none");
        $('.emblem').css("display","none");

    } else if( scroll_top > div_six_top) {
        //Contact
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","transparent");
        $('#manifestoLink').css("background-color","transparent");
        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","#009BCF");

        $('.navbar-inverse').css("opacity","1");
        $('.navbar-inverse').css("pointer-events","auto");
        $('.navbar-inverse').css("background-color","#eeeeee");
        $('.navbar-inverse').css("border-bottom","3px solid #009BCF");

        $('#v0').css("display","none");
        $('.emblem').css("display","none");

    } else {
        //Home
        $('#aboutLink').css("background-color","transparent");
        $('#goalLink').css("background-color","transparent");
        $('#projectsLink').css("background-color","transparent");
        $('#sponsorsLink').css("background-color","transparent");
        $('#contactLink').css("background-color","transparent");

        $('.navbar-inverse').css("opacity","0");
        $('.navbar-inverse').css("pointer-events","none");
        $('.navbar-inverse').css("border-bottom-color","transparent");

        //fade scroll indicator once scrolled
        $('.indicator').css("opacity","0");

        $('#v0').css("display","block");
        $('.emblem').css("display","block");
    }

});

//handles two separate nav bars

$(document).ready(function() {
  $('#mainNav a').on('click', function(){
    if ($(window).width() <= 752) $('.main-toggle').click() //bootstrap 3.x by Richard
  });
  $('#subNav a').on('click', function(){
    if ($(window).width() <= 752) $('.subnav-toggle').click() //bootstrap 3.x by Richard
  });

});

$(window).ready(function() {

  var canPlay = false;
  var v = document.createElement('video');
  if(v.canPlayType && v.canPlayType('video/mp4').replace(/no/, '')) {
      canPlay = true;
  }

  if (canPlay) {
    var video = document.getElementById('v0');
    video.pause();
    video.addEventListener('loadeddata', function() {
       video.play();
       $('.loader').delay(800).fadeOut("slow");
    }, false);
  } else {
    $('.loader').remove();
    $('.home').css('margin-top', '450px');
  }


});
