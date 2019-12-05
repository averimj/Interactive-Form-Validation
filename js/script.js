
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
