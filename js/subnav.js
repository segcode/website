$(document).ready(function() {

  if ($(window).width() <= 500) {
    $('video').css('display', 'none');
    $('.rockettron').css('display', 'block');

    //remove timeline picture side padding so they are centred if mobile
    $(".timeline-picture").removeClass("timeline-picture-left timeline-picture-right");

    //remove loader and video
    $('.loader').css('display', 'none');
    $('.emblem').css('position', 'absolute');
    $('.emblem').css('z-index', '1000');
    $('.emblem').css('margin-top', '50px');
    $('.home').css('margin-top', '-100px');

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
      $('#projectName').text('F.I.A.S.C.O (Futuristic Ingeniously Assembled Space and Cosmos Observer)');
      $('#projectInfo').text('During the year 2016/17, we have decided to build a weather balloon that could perform measurements, take pictures of the stratosphere and ' +
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
      $('.projecttron').css('background-image', 'url("images/segCar/main.jpg")');
      $('#projectName').text('SEG Car (Remotely Controlled Vehicle)');
      $('#projectInfo').text('Our first project, that we worked on during the year of 2015/16, was remotely a controlled vehicle or as we like to call it - SEG car. ' +
          'The main goal of the project was to construct a vehicle that could move around, sense and determine the properties of a local environment.');
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
