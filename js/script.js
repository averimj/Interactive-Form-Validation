                    /*FIRST NAME*/
// ensures the cursor will appear in the 'first name' input on the page -- stackoverflow.com
$(':input:enabled:visible:first').focus();


                    /*JOB ROLE*/
// hides the textarea box
$('#other-title').hide();

// if user clicks on 'other', than a textarea box will appear
$('#title').change(function(){
  const value = $(this).val();
  if (value == 'other'){
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
});


                    /*SHIRT THEME*/
// creates a 'Please Select Theme' message as the first option in the dropdown box
$('#color').prepend('<option value="color_please" selected>Please Select Theme</option>');

// hides all shirt color selections and only shows the 'Please Select Theme'
$('#color option:not(:first)').hide();

/* if the user selects 'js puns', only show the first 3 color themes and hide the rest,
  if the user selects 'I Heart js', only show the last 3 color themes and hide the rest
*/
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


                    /*ACTIVITY*/
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


                    /*PAYMENT*/
// hides the "select payment method" from the dropdown
$('#payment option:first-child').hide();

// sets credit card as the default payment method
$('select option[value="credit card"]').attr('selected',true);

// hides paypal and bitcoin payment methods
$('.paypal').hide();
$('.bitcoin').hide();

/* if the payment is credit card, show the credit card payment info and hide the rest
  if payment is paypal, show the paypal payment info and hide the rest
  if payment is bitcoin, show the bitcoin payment info and hide the rest
*/
$('#payment').change(function(){
  let value = $(this).val();
    if (value == 'credit card') {
      $('.credit-card').show();
      $('.paypal').hide();
      $('.bitcoin').hide();
    } else {
      if (value == 'paypal') {
        $('.paypal').show();
        $('.credit-card').hide();
        $('.bitcoin').hide();
    } else {
      if (value == 'bitcoin') {
        $('.bitcoin').show();
        $('.credit-card').hide();
        $('.paypal').hide();
      }
    }
  }
});


                    /*VALIDATION*/
// ensures the name entered is valid, if not, makes the border red
// ensures the name entered is valid, if not, makes the border red
$('#name').on('focusout', function(e) {
  let regexName = /^[a-zA-Z ]{3,16}$/;
  let name = $(e.target);
  if( !$(name).val().match(regexName) || $(name) == ''){
    name.addClass('invalid');
    name.removeClass('valid');
    return false;
  } else {
    name.addClass('valid');
    name.removeClass('invalid');
    return true;
  }
});

// ensures the email entered is valid, if not, makes the border red
$('#mail').on('focusout', function(e) {
  let regexEmail = /\w.+@[a-zA-Z_-]+\.[a-zA-Z]{2,3}$/;
  let mail = $(e.target);
  if( !$(mail).val().match(regexEmail) || $(mail) == '') {
    mail.addClass('invalid');
    mail.removeClass('valid');
    return false;
  } else {
    mail.addClass('valid');
    mail.removeClass('invalid');
    return true;
  }
});

// ensures the credit card entered is valid, if not, makes the border red
$('#cc-num').on('focusout', function(e) {
  let regexCredit = /^(\d{4})-?(\d{4})-?(\d{4})-?(\d{4})$/;
  let creditCardNum = $(e.target);
  if( !$(creditCardNum).val().match(regexCredit) || $(creditCardNum) == '') {
    $(creditCardNum).addClass('invalid');
    $(creditCardNum).removeClass('valid');
    return false;
  } else {
    $(creditCardNum).addClass('valid');
    $(creditCardNum).removeClass('invalid');
    return true;
  }
});
