$(document).ready(function() {

  if ($(window).width() <= 500) {
    $('video').css('display', 'none');
    $('.rockettron').css('display', 'block');
  } else {
    $('video').css('display', 'block');
    $('.rockettron').css('display', 'none');
  }

  //F.I.A.S.C.O project section
  $('#fiascoLink').on('click', function(){

    //display fiasco timeline only
    $('.fiasco').css('display', 'block');
    $('.car').css('display', 'none');

    //underline fiasco link
    $('#fiascoLink').css('text-decoration', 'underline');
    $('#carLink').css('text-decoration', 'none');

    //header transition
    $('.projecttron').fadeOut(200);
    $('.projecttron').fadeIn(200);

    //gives appearance of image and text fading
    setTimeout(function() {
      $('.projecttron').css('background-image', 'url("images/project_fiasco.jpg")');
      $('#project_info').text('During the year 2016/17, we have decided to build a weather balloon that could perform measurements, take pictures of the stratosphere and ' +
          'communicate the acquired information back to the ground station.');
    }, 200);


  });

  //SEG Car timeline
  $('#carLink').on('click', function(){

    //display seg car timeline only
    $('.fiasco').css('display', 'none');
    $('.car').css('display', 'block');

    //underline seg car link
    $('#fiascoLink').css('text-decoration', 'none');
    $('#carLink').css('text-decoration', 'underline');

    //header transition
    $('.projecttron').fadeOut(200);
    $('.projecttron').fadeIn(200);

    //gives appearance of image and text fading
    setTimeout(function() {
      $('.projecttron').css('background-image', 'url("images/project_segcar.jpg")');
      $('#project_info').text('The SEG Car was our society project for 2015/16, which involed designing and building an automonous RC vehicle');
    }, 200);

  });

  //boolean to handle mobile timeline panel selection toggling
  var toggled = false;

  $('.timeline-panel').on('click', function() {

    //if on mobile
    if ($(window).width() <= 500) {

      //enlarge panel and show all panel body text
      if (toggled) {
        $(this).children('.timeline-body').children('p').css({'white-space':'normal', 'overflow':'visible', 'text-overflow':'inherit'});
        $(this).css({'height':'auto'});
        toggled = false;
      //collapse panel and show elipses of panel body text
      } else {
        $(this).children('.timeline-body').children('p').css({'white-space':'nowrap', 'overflow':'hidden', 'text-overflow':'ellipsis'});
        $(this).css({'height':'auto'});
        toggled = true;
      }

    //if not on mobile then always show all panel text
    } else {
      $(this).children('.timeline-body').children('p').css({'white-space':'normal', 'overflow':'visible', 'text-overflow':'inherit'});
      $(this).css({'height':'auto'});
    }

  });

});
