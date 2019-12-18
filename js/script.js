
// ensures the cursor will appear in the 'first name' input on the page -- stackoverflow.com
$(':input:enabled:visible:first').focus();


// hides the textarea box
$('#other-title').hide();


/* adds an eventListener to the 'other' option using .change
if user clicks on 'other', than a textarea box will appear */
$('#title').change(function(){
  const value = $(this).val();
  if (value == 'other'){
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
  const designTheme = $(this).val();
  if (designTheme == 'js puns'){

    $('#color option:first-child').hide();
    $('#color>option:eq(1)').prop('selected', true).show()
    $('#color>option:eq(2)').show()
    $('#color>option:eq(3)').show()
    $('#design>option:eq(0)').hide()
    $('#color>option:eq(4)').hide()
    $('#color>option:eq(5)').hide()
    $('#color>option:eq(6)').hide()
  } else {
    $('#color option:first-child').hide();
    $('#color>option:eq(4)').prop('selected', true).show()
    $('#color>option:eq(5)').show()
    $('#color>option:eq(6)').show()
    $('#design>option:eq(0)').hide()
    $('#color>option:eq(1)').hide()
    $('#color>option:eq(2)').hide()
    $('#color>option:eq(3)').hide()
 }
});


// adds DOM element to activity section
const totalOfActivities = $('.activities').append('<div id="total">$0</div>');

// creates global 'input' variable
const input = $('input[type="checkbox"]')


// adds the cost calculator to the activities section
$('label').click(function() {
  var total = 0;
   $('input:checked').each(function() {
    total += parseInt($(this).attr('data-cost')) ;
  });
  $('#total').html('$' + total);
});


/* when the user picks a workshop, it checks to see if that 'day and time', is equal to any other workshops
if it is, then disable the other workshop, and make it non-clickable

this doesn't work properly ... disables and unchecks activities with the same 'day-and-time' but also
disables the other activities as well
*/
$('.activities').change(function(e) {
  let target = e.target;
  const targetAttributes = $(target).attr('data-day-and-time');
  workshops.each(function() {
    const eachValue = $(this).attr('data-day-and-time');
    if(targetAttributes === eachValue ){
      if($(target).is(':checked')){
        $(target).attr('disabled', false);
        $(this).attr('disabled', true);
        } else {
        $(this).attr('disabled', false);
        $(this).attr('checked', true);
      }
    }
  })
});


// hides the "select payment method" from the dropdown
$('#payment option:first-child').hide();


// sets credit card as the default payment method
$('select option[value="credit card"]').attr('selected',true);
