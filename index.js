var stopTime = new Date('Jan 1, 2025 00:00:00').getTime();


var x = setInterval(function(){
    var now = new Date().getTime();
    var duration = stopTime - now;

    var days = Math.floor(duration / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
    var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
    var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
    var seconds = Math.floor((duration % (1000 * 60)) / 1000).toString().padStart(2, 0);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if(duration < 0){
        clearInterval(x)
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    }

},1000);