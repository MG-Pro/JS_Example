$('#tel_f').on('input', function () {
  var telValue = $('#tel_f').val();
  var rep = /[-\.\s,\*\=\/;":'a-zA-Zа-яА-Я]/;
  if (rep.test(telValue)) {
    $('#tel_f').val(telValue.replace(rep, ''));
  }
});