$(document).ready(function(){
	var date = new Date("April 13, 2018 10:00:00");
    var now = new Date();

    var diff = (date.getTime()/1000) - (now.getTime()/1000);

    var clock = $('.clock').FlipClock(diff,{
    	autoStart: true,
        clockFace: 'HourlyCounter',
        countdown: true
    }); 
});