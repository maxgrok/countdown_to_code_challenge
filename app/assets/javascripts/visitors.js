var clock;

      $(document).ready(function() {

        // Instantiate a counter
        clock = new FlipClock($('.clock'), 300, {
          clockFace: 'HourlyCounter',
          autoStart: true,
          countdown: true
        });
        
      });