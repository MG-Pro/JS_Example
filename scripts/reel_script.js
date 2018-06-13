$(document).ready(function () {
  var time = 3728;
  
  function simpleTimer(sec) {
    var time = sec;
    var hour = parseInt(time / 3600);
    if (hour < 1)
      hour = 0;
    time = parseInt(time - hour * 3600);
    if (hour < 10)
      hour = '0' + hour;
    var minutes = parseInt(time / 60);
    if (minutes < 1)
      minutes = 0;
    time = parseInt(time - minutes * 60);
    if (minutes < 10)
      minutes = '0' + minutes;
    var seconds = time;
    if (seconds < 10) seconds = '0' + seconds;
    $('.counter-h').text(hour);
    $('.counter-m').text(minutes);
    $('.counter-s').text(seconds);
    sec--;
    if (sec > 0) {
      setTimeout(function () {
        simpleTimer(sec);
      }, 1000);
    }
  }
  
  simpleTimer(time);
  
  $('.toform').click(function () {
    $("html, body").animate({
      scrollTop: $("form").offset().top
    }, 2000);
    return false;
  });
  var reelCounter = 0;
  var reelButton = $('.reel__body-btn');
  reelButton.on('click', function (e) {
    console.log(e);
    var countElem = $('.reel__attempts-count');
    var widthCorrect = 0;
    var randWidthCorrect = 147;
    if (window.innerWidth <= 768 & window.innerWidth > 425) {
      widthCorrect = -218;
      randWidthCorrect = 85;
    } else {
//      widthCorrect = -18;
//      randWidthCorrect = 5;
    }
    var itemOne = -9768 + widthCorrect * -1 + 'px';
    var itemTwo = ((21 + 10 * getRandomInt(5, 10) * 192) * -1) - randWidthCorrect + 'px';
    var itemThree = ((21 + 10 * getRandomInt(5, 10) * 192) * -1) - randWidthCorrect + 'px';
    if (reelCounter === 0) {
      countElem.text(countElem.text() - 1);
      $('.reel__timer-res').removeClass('hidden');
    } else if (reelCounter === 1) {
      itemTwo = -9768 + widthCorrect * -1 + 'px'; //-9550px
      countElem.text(countElem.text() - 1);
      $('.reel__timer-res-val').text('25');
    } else if (reelCounter === 2) {
      itemTwo = -9768 + widthCorrect * -1 + 'px';
      itemThree = -9768 + widthCorrect * -1 + 'px';
      countElem.text(countElem.text() - 1);
      $('.hidden').removeClass('hidden');
      $('.reel__timer-res-val').text('50');
      reelButton.addClass('reel__body-btn_dis');
      reelButton.off('click');
    }
    reelButton.addClass('reel__body-btn_dis');
    $('.reel__body-btn-box').removeClass('reel__body-btn-box_anim');
    $('.reel__counter-item').css({backgroundPositionY: '21px'});
    
    $('.reel__counter-item_one').animate({
      backgroundPositionY: itemOne
    }, 2000, startPulse);
    $('.reel__counter-item_two').animate({
      backgroundPositionY: itemTwo
    }, 2000, startPulse);
    $('.reel__counter-item_three').animate({
      backgroundPositionY: itemThree
    }, 2000, startPulse);
    reelCounter++;
    
    function startPulse() {
      $('.reel__body-btn-box').addClass('reel__body-btn-box_anim');
      reelButton.removeClass('reel__body-btn_dis');
      if (reelCounter > 2) {
        $('.reel__body-btn-box').removeClass('reel__body-btn-box_anim');
        $('.hidden_d').removeClass('hidden_d');
        reelButton.addClass('reel__body-btn_dis');
        fireWork();
      }
    }
  });
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function fireWork() {
    var colors = ["#F88431", "#F6BA35", "#EDD43A", "#89DC28", "#FF3399", "#FF0066"];
    var col_length = colors.length;
    var number_of_circles = 200; // you can change number of circles;
    var i = 0;
    
    function create_random_line() {
      $('.congratulation__firework').append('<div class = "circle"></div>');
      if (i < number_of_circles - 1) {
        setTimeout(function () {
          var getRandomPosX = Math.random() * (window.innerWidth);
          var getRandomPosY = Math.random() * (window.innerHeight - 70) + 70;
          var getRandomColor = Math.floor(Math.random() * col_length);
          var getRandomScale = Math.random() * (1.8 - 0.5) + 0.5;
          var getRandomOpacity = Math.random() * (1 - 0.3) + 0.3;
          var getRandomZIndex = Math.floor(Math.random() * 10);
          console.log($('.circle').eq(i));
          
          $('.circle').eq(i).css({
            'left': getRandomPosX,
            'top': getRandomPosY,
            'transform': 'scale(' + getRandomScale + ')',
            'background': colors[getRandomColor],
            'opacity': getRandomOpacity,
            'z-index': getRandomZIndex
          });
          create_random_line()
        }, 30);
        i++;
      }
      else {
        $('.congratulation__firework').hide();
        return;
      }
    }
    
    create_random_line()
  }
  
  $('.congratulation__firework').on('click', function (e) {
    $(this).hide();
  })
  
});
