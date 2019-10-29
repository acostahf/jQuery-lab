// $("button:#addSkill").click(function () {
// $('#msg').html($('input:textbox').val());
// });

var inp;
$('#addSkill').click(function() {
inp = $('#inputId').val();
$('ul').append('<li>' + inp + '</li>')
});