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
  };
})
