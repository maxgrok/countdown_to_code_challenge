$(document).ready(function(){
	var date = new Date(2018, 4, 13, 10);
    var now = new Date(2018, 4, 12, 4);
    var diff = (date.getTime()/1000) - (now.getTime()/1000);

    var clock = $('.clock').FlipClock(diff,{
        clockFace: 'HourlyCounter',
        countdown: true
    }); 
});