  //timer
  var id;
  
  function timerStart() {
    WebFont.load({
      google: {families: ['VT323']},
      active: function () {
        timer(true);
      }
    });
    
    function timer(mob) {
      $('.timer').toggleClass('active');
      
      var props = !mob ? {
        w: 225,
        h: 225,
        ra: 100,
        fs: 70,
        lw: 20
      } : {
        w: 150,
        h: 150,
        ra: 65,
        fs: 40,
        lw: 15
      };
      var timer = document.getElementById('timer');
      var w = timer.width = props.w;
      var h = timer.height = props.h;
      var ctx = timer.getContext('2d');
      var radius = props.ra;
      var startTime = 0;
      
      function draw(time) {
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'grey';
        ctx.lineWidth = props.lw;
        ctx.setLineDash([7, 10]);
        ctx.stroke();
        
        var strTime = (time / 100).toFixed(3);
        
        if (time > 10000) {
          clearInterval(id);
          toSecondSlide();
        }
        
        ctx.beginPath();
        ctx.fillStyle = "#76ba00";
        ctx.font = 'bold ' + props.fs + 'px VT323';
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText(strTime, w / 2, h / 2);
        
        var rad = time / 25 * Math.PI / 180;
        
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, radius, 0, rad);
        ctx.strokeStyle = '#76ba00';
        ctx.lineWidth = props.lw;
        ctx.setLineDash([7, 10]);
        ctx.stroke();
      }
      
      id = setInterval(function () {
        draw(startTime++);
      }, 10)
    }
  }