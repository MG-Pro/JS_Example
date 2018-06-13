var numbers = $('.timer__count');
var time = 900;

var targetTime;
var currentTime = new Date();
var currentTimeSec = currentTime.getMinutes() * 60 + currentTime.getSeconds();

if (currentTimeSec >= 0 && currentTimeSec < 900) {
  targetTime = time - (currentTimeSec);
} else if (currentTimeSec >= 900 && currentTimeSec < 1800) {
  targetTime = time - (currentTimeSec - 900);
} else if (currentTimeSec >= 1800 && currentTimeSec < 2700) {
  targetTime = time - (currentTimeSec - 1800);
} else if (currentTimeSec >= 2700 && currentTimeSec < 3599) {
  targetTime = time - (currentTimeSec - 2700);
}

function simpleTimer(sec, block) {
  var time = sec;
  var minutes = parseInt(time / 60);
  if (minutes < 1) minutes = 0;
  time = parseInt(time - minutes * 60);
  
  if (minutes < 10)
    minutes = '0' + minutes;
  var seconds = time;
  
  if (seconds < 10)
    seconds = '0' + seconds;
  block.text(minutes + ' นาที  ' + seconds + ' วินาที  ');
  if (sec == 0)
    sec = 900;
  sec--;
  setTimeout(function () {
    simpleTimer(sec, block);
  }, 1000);
}

simpleTimer(targetTime, numbers);