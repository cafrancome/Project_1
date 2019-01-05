var Timer = (function (w, undefined) {
    var result = {};
    this.mins = 2; //Set the number of minutes you need
    this.secs = mins * 60;
    this.currentSeconds = 0;
    this.currentMinutes = 0;

    result.Decrement = function () {
        currentMinutes = Math.floor(secs / 60);
        currentSeconds = secs % 60;
        if (currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
        secs--;
        document.getElementById("timer").innerHTML = currentMinutes + ":" + currentSeconds; //Set the element id you need the time put into.
        if (secs !== -1) {
            $('#btn-reinicio').text('Iniciar');
            setTimeout(result.Decrement, 1000);       
        } 
    }


    return result
})(window, undefined)

// $(document).ready(function () {    
    
// });

