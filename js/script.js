/*FIRST NAME*/
// ensures the cursor will appear in the 'first name' input on the page -- stackoverflow.com
$('#name').focus();


/*JOB ROLE*/
// hides the textarea box
$('#other-title').hide();

// if user clicks on 'other', than a textarea box will appear
$('#title').change(function() {
  const value = $(this).val();
  if (value == 'other') {
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
$('#design').change(function() {
  const designTheme = $(this).val();
  if (designTheme == 'js puns') {

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
// const workshops = $('.activities input');

// adds the cost calculator to the activities section
$('label').click(function() {
  var total = 0;
  $('input:checked').each(function() {
    total += parseInt($(this).attr('data-cost'));
  });
  $('#total').html('$' + total);
});

/* when the user picks a workshop, it checks to see if that 'day and time', is equal to any other workshops
if it is, then disable the other workshop, and make it non-clickable */


$('.activities').change(function(e) {
  let target = e.target;
  const targetTime = $(target).attr('data-day-and-time');
  input.each(function(index, value) {
    const currentTime = $(value).attr('data-day-and-time');
    if (targetTime === currentTime && target.name !== value.name) {
      if ($(target).is(':checked')) {
        $(target).attr('disabled', false);
        $(value).attr('disabled', true);
      } else {
        $(target).attr('disabled', false);
        $(value).attr('disabled', false);
      }
    }
  });
});


/*PAYMENT*/
// hides the "select payment method" from the dropdown
$('#payment option:first-child').hide();

// sets credit card as the default payment method
$('select option[value="credit card"]').attr('selected', true);
// $('select option[value="credit card"]').is(':selected');


// hides paypal and bitcoin payment methods
$('.paypal').hide();
$('.bitcoin').hide();

/* if the payment is credit card, show the credit card payment info and hide the rest
if payment is paypal, show the paypal payment info and hide the rest
if payment is bitcoin, show the bitcoin payment info and hide the rest
*/
$('#payment').change(function() {
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
$('.container').submit( (e) => {

  let errorFlag = false;

  let name = $('#name').val();
  let email = $('#mail').val();
  let checkedWorkshop = $('input:checked')
  let ccNum = $('#cc-num').val();
  let zipCode = $('#zip').val();
  let cvv = $('#cvv').val();

  $('.error').remove();

  if (name.length < 1) {
    $('#name').after('<span class="error">Name is required</span>');
  } else {
    let regexName = /^[a-zA-Z ]{3,16}$/;
    let validName = regexName.test(name);
      if (!validName) {
        $('#name').after('<span class="error">Enter a valid name</span>')
        errorFlag = true;
    }
  };

  if (email.length < 1) {
    $('#mail').after('<span class="error">Email is required</span>');
  } else {
    let regexEmail = /\w.+@[a-zA-Z_-]+\.[a-zA-Z]{2,3}$/;
    let validEmail = regexEmail.test(email);
    if (!validEmail) {
      $('#mail').after('<span class="error">Enter a valid email</span>')
      errorFlag = true;
    }

  };

  if (!$('input[type=checkbox]').is(':checked')) {
    $('.activities').after('<span class="error">Check at Least 1 Activity</span>')
     errorFlag = true;
  };

  if ($('select option[value="credit card"]').attr('selected', true)) {
    if (ccNum.length < 1) {
      $('#cc-num').after('<span class="error">Credit Card required</span>');
    } else {
      let regexCredit = /^\d{13,16}$/;
      let validCredit = regexCredit.test(ccNum);
      if (!validCredit) {
        $('#cc-num').after('<span class="error">Enter valid credit card</span>')
        errorFlag = true;
      }

    };

    if (zipCode.length < 1) {
      $('#zip').after('<span class="error">Zip required</span>');
    } else {
      let regexZip = /^\d{5}$/;
      let validZip = regexZip.test(zipCode);
      if (!validZip) {
        $('#zip').after('<span class="error">Enter valid zipcode</span>')
        errorFlag = true;
      }
    };

    if (cvv.length < 1) {
      $('#cvv').after('<span class="error">cvv required</span>');
    } else {
      let regexCVV = /^\d{3,4}$/;
      let validCVV = regexCVV.test(cvv);
      if (!validCVV) {
        $('#cvv').after('<span class="error">Enter valid cvv</span>')
        errorFlag = true;
      }

    };

  } else {
    ($('select option[value="paypal"]').attr('selected', true)) || ($('select option[value="bitcoin"]').attr('selected', true))

  };

  if (errorFlag === true){
    e.preventDefault();
  }
});
