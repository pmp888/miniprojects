// messagearray = [];
// var messageobject = {
//   transport: function() {
//   var messageinput = document.GetElementById ('messageinput');
//   messagearray.push (messageinput.value);
//   messageinput.value = '';
//   }
// }; old way (wrong = doesnt work)



// extract the content of the input
$('#messageinput').on('keyup',function(e) {
  console.log($(this).val())
  var msg = $(this).val()
  // console.log(e);
  if (e.which == 13){
    // write the content on the 2nd box
    $('#box').append('<div class="msg">' + msg + '</div>')
    // clear input
    $('#messageinput').val('')
  }
});
// $('#box').detach().on($('button.hover')); - WRONG
// target element inside the box (each message) + click
// $(#on(click).$(this).detach tony said comment..
$(document).on('click', '.msg', function() {
  $(this).detach() // detach that getElementById
})
// Behind the scenes
// let on = function(action_type, element, c) {
//   if (action_type == 'click') {
//     // do this
//     // on which element?
//     element
//   }
// }
//
// 1. Channels
//
// Create a box with a list of channels
// When you click on a channel, the content of another box called "messages" should change
// Change the background color of the selected channel

// Mini Project 2.1
var channels = ['DOTA2','League of Legends','Heroes of the Storm','DOTA Chess']
$('#channels li').on('click', function() {
for (games in channels) {$('#channels li').html(channels[games])
}
  $('#channels li').css('background-color','white')
  $(this).css('background-color','blue')
  // $('#messages h1').html('Hello')
// if ($(this).html() == 'Welcome') { no need to show as im showing name of channel
  $('#messages h1').html($(this).html())

  console.log($(this));
})

// function() {}
