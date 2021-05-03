$(function(){
  $('#texbox').on('keyup', event => {
    $('#newText').html($(event.currentTarget).val());
  });
  
  $('#number').on('change', event => {
    var fontSize = ($(event.currentTarget).val()) + 'px';
    $('#newText').css('fontSize',fontSize);
  });
  
  $("#dropdown").on("change",event => {
       $('#newText').css('fontFamily',$(event.currentTarget).val());             
                    });
  
    $("#dropdown2").on("change",event => {
       $('#newText').css('fontWeight',$(event.currentTarget).val());             
                    });
  
});