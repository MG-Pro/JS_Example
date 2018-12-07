//function go() {
//  var poem = 'Ночь, улица, фонарь, !!! аптека,* Бессмысленный и тусклый свет.* Живи еще !!! хоть четверть века -* Все будет так. Исхода !!! нет.* Умрешь - начнешь опять сначала* И повторится !!! все, как встарь:* Ночь, ледяная !!! рябь канала,* Аптека, улица, !!! фонарь.*';
//  poem = poem.replace(/!!!/g, ' ');
//  var arr = poem.split('*');
//  var i = 0;
//  var timer = setInterval(function() {
//    if (i >= arr.length) {
//      clearInterval(timer);
//      console.log("The end.");
//    } else {
//      console.log(i + ": " + arr[i++]);
//    }
//  }, 1000);
//}



function go() {
  var poem = 'Ночь, улица, фонарь, !!! аптека,* Бессмысленный и тусклый свет.* Живи еще !!! хоть четверть века -* Все будет так. Исхода !!! нет.* Умрешь - начнешь опять сначала* И повторится !!! все, как встарь:* Ночь, ледяная !!! рябь канала,* Аптека, улица, !!! фонарь.*';
  poem = poem.replace(/!!!/g, ' ');
  var arr = poem.split('*');
  for (var i = 0; i < arr.length; i++) {
    setTimeout((function(index){
      return function() {
        console.log(index + ": " + arr[index])
      };
    })(i), 1000 * (i + 1))
  }
}

go();
