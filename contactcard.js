function cardStyle(){
  $('.card').css("text-align","center");
  $('.card').css("margin","10px");
  $('.card').css("width","300px");
  $('.card').css("height","200px");
  $('.card').css("position","relative");
  $('.card').css("border","1px solid black");
  $('.name').css("display","inline-block");
  $('.name').css("margin","10px");
  $('.name').css("font-size","24px");
  $('.c').css("position","absolute");
  $('.c').css("bottom","10px");
  $('.c').css("left","80px");
  $('.descrip').css("display","none");

}

cardStyle();

$(document).on('click','.card',function(){
  $(this).children().toggle('slow');
})

$('button').click(function(){
  if($('#first').val() !=''&& $('#last').val() !=''&& $('#description').val() !=''){
    // var acard="<div class='card'><p class='name'>"+$('#first').val()+"</p><p class='name'>"+$('#last').val()+"</p><p>Click for description!</p><p class='descrip'>"+$('#description').val()+"</p></div>";
    // document.getElementById(card_area).innerHTML += acard;

    $('#card_area').append("<div class = 'card'><div class='front'></div></div>");
    $('#card_area .card:last-child .front').append("<p class='name'>"+$('#first').val()+'</p>');
    $('#card_area .card:last-child .front').append("<p class='name'>"+$('#last').val()+'</p>');
    $('#card_area .card:last-child .front').append("<p class='c'>Click for description!</p>");
    $('#card_area .card:last-child').append("<p class='descrip'>"+$('#description').val()+"</p>");
    cardStyle();
    $('#first').val("");
    $('#last').val("");
    $('#description').val("");
  }
});
