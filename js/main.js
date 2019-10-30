// $("button:#addSkill").click(function () {
// $('#msg').html($('input:textbox').val());
// });

var inp;
$('#addSkill').click(function(evt) {
let inp = $('#inputId').val();
$('ul').append('<li><button id="red" class = "btn btn-xs btn-danger">X</button>' + inp + '</li>')
});

$(document).on('click', '#red', function(){
    $(this).parent().remove();
 })

$('ul').css('list-style-type', 'none')

// function (removebtn) {
//     $(document).on('click', 'li', function () {
//         $(this).remove();
//     })
// }