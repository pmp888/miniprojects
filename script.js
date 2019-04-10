$('form').on('submit', function(e) {
	e.preventDefault(); // it prevents the default behaviour
	console.log($('#anymessage').val());
  $('#box').append($('#anymessage').val() + '<br>');
});
