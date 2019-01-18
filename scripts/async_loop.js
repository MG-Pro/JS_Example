var poem = ' Ночь, улица, фонарь, аптека,* Бессмысленный и тусклый свет.* Живи еще хоть четверть века -* Все будет' +
  ' так. Исхода нет.* Умрешь - начнешь опять сначала* И повторится все, как встарь:* Ночь, ледяная рябь канала,* Аптека, улица, фонарь.';

function start(str, sep) {
  var arr = str.split(sep);
  var i = 0;
  var timer = setInterval(function() {
    if (i >= arr.length) {
      clearInterval(timer);
    } else {
      console.log(i + ": " + arr[i++]);
    }
  }, 1000);
}




function go(str, sep) {
  str.split(sep).forEach(function (item, i, arr) {
    setTimeout((function(index){
      return function() {
        console.log(index + ": " + arr[index])
      };
    })(i), 1000 * (i + 1))
  });
}

//go(poem, '*');

//start(poem, '*');

function loop(arr, cb, delay = 1000) {
  var i = 0;
  var timer = setInterval(function() {
    if (i >= arr.length) {
      clearInterval(timer);
    } else {
      cb(arr[i], i++, arr)
    }
  }, delay);
}

Array.prototype.asyncForEach = function loop(cb, delay = 1000) {
  var i = 0;
  var timer = setInterval((function(context) {
    return function () {
      if (i >= context.length) {
        clearInterval(timer);
      } else {
        cb(context[i], i++, context)
      }
    }

  })(this), delay);
};

poem.split('*').asyncForEach(function (item, i) {
  console.log(i + ' ' + item);
});

//loop(poem.split('*'), function (item, i) {
//  console.log(i + ' ' + item);
//}, 500);


