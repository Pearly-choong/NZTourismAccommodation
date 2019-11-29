console.log('NZ tourism');
// $('#searchForm').hide();
$('#sec1').hide();

$(document).ready(function(){

  //  Notification modal screen
  $('#sec1').click(function(){
    $('#searchForm').show();
    $('#sec1').hide();
  });


  });



  // date calculation
  // validate user entry
$('#startDate').datepicker({
  dateFormat : 'yy-mm-dd',
  changeMonth : true,
  minDate : new Date(),
  maxDate : '+1y',
  onSelect : function(date){
    var selectDate = new Date(date);
    //number of miliseconds in a day
    var msecsInADay = 86400000;

    // considering the time of the day when the site is used
    var stDate = new Date(selectDate.getTime() + msecsInADay);

    // Set Minimum date of endDatePicker after selected date of startDate endDatePicker
    $('#endDate').datepicker('option', 'minDate', stDate);
    var enDate = new Date(selectDate.getTime() + 15 * msecsInADay);

    $('#endDate').datepicker('option', 'maxDate', enDate);
  }


  });

  $('#endDate').datepicker({
  dateFormat : 'yy-mm-dd',
  changeMonth : true
});


function dateDiff(){
  var start = $(startDate).datepicker('getDate');
  var end = $(endDate).datepicker('getDate');
  // conver miliseconds, then to seconds, then to minutes, then to hours and last days
  var days = (end - start)/1000/60/60/24; // user readable format

  document.getElementById('days').value = days;
  return;
}

$('#calcDate').click(function(){
  dateDiff();
});
