
// ensures the cursor will appear in the 'first name' input on the page -- stackoverflow.com
$(':input:enabled:visible:first').focus();


// hides the textarea box
$('#other-title').hide();


/* adds an eventListener to the 'other' option using .change
if user clicks on 'other', than a textarea box will appear */
$('#title').change(function(){
  const $value = $(this).val();
  if ($value == 'other'){
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});


// creates a 'Please Select Theme' message as the first option in the dropdown box
$('#color').prepend('<option value="color_please" selected>Please Select Theme</option>');
// hides all shirt color selections and only shows the 'Please Select Theme'
$('#color option:not(:first)').hide();


// adds an eventListener...if the 'Design Theme' changes, only show the user certain 'color themes' and hide the rest
$('#design').change(function(){
  const $designTheme = $(this).val();
  if ($designTheme == 'js puns'){

    $('#color option:first-child').hide();
    $('#color>option:eq(1)').prop('selected', true).show()
    $('#color>option:eq(2)').show()
    $('#color>option:eq(3)').show()
  } else {
    $('#color option:first-child').hide();
    $('#color>option:eq(4)').prop('selected', true).show()
    $('#color>option:eq(5)').show()
    $('#color>option:eq(6)').show()
    $('#color>option:eq(1)').hide()
    $('#color>option:eq(2)').hide()
    $('#color>option:eq(3)').hide()
  }
});


// adds DOM element to activity section
$('.activities').append('<div id="total">$0</div>');


// adds the cost calculator to the activities section
$(document).ready(function() {
  $('label').click(function() {
    var total = 0;
     $('input[type="checkbox"]:checked').each(function() {
      total += parseInt($(this).attr('data-cost')) ;
    });
    $('#total').html('$' + total);
  });
});
