
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

/* it aint pretty but it works ... this checks for a "change" on the activities checkboxes ...
each time a change occurs, it iterates thru the activities ... if jsFramework is checked, it disables the
expWorkshop box because the times conflict ... and if the expWorkshop box is checked, it disables the jsFramework box

the same thing is happening with the jsLibrary and nodesWorkshop boxes
*/
const workshops = $('.activities input');

$('.activities').change(function(){
  workshops.each(function() {
    var jsFramework = $('input[name="js-frameworks"]');
    var expWorkshop = $('input[name="express"]');
    var jsLibrary = $('input[name="js-libs"]');
    var nodesWorkshop = $('input[name="node"]');

    if (jsFramework.is(':checked')) {
      $(jsFramework).attr(':checked', true);
      $(expWorkshop).attr('disabled', true);
      $(expWorkshop).attr('checked', false);
    } else  {
      $(expWorkshop).attr('disabled', false);
    }
    if(expWorkshop.is(':checked')) {
      $(expWorkshop).attr(':checked', true);
      $(jsFramework).attr('disabled', true);
      $(jsFramework).attr('checked', false);
    } else  {
      $(jsFramework).attr('disabled', false);
    }
    if(jsLibrary.is(':checked')) {
      $(jsLibrary).attr(':checked', true);
      $(nodesWorkshop).attr('disabled', true);
      $(nodesWorkshop).attr('checked', false);
    } else  {
      $(nodesWorkshop).attr('disabled', false);
    }
    if(nodesWorkshop.is(':checked')) {
      $(nodesWorkshop).attr(':checked', true);
      $(jsLibrary).attr('disabled', true);
      $(jsLibrary).attr('checked', false);
    } else  {
      $(jsLibrary).attr('disabled', false);
    }
  });
});
