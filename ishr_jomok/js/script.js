(function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery);

$(document).on('click', function () {
    document.getElementById("my_audio").play();
});

// Set the date we're counting down to
var countDownDate = new Date("Jun 20, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in a 2x2 grid format
    document.getElementById("time").innerHTML = `
    <div class='container'>
        <div class='days block flex flex-col items-center'>
            <h2>${days}</h2>
            <p>Hari</p>
        </div>
        <div class='hours block flex flex-col items-center'>
            <h2>${hours}</h2>
            <p>Jam</p>
        </div>
        <div class='minutes block flex flex-col items-center'>
            <h2>${minutes}</h2>
            <p>Menit</p>
        </div>
        <div class='seconds block flex flex-col items-center'>
            <h2>${seconds}</h2>
            <p>Detik</p>
        </div>
    </div>`;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for a happy life!";
    }
}, 1000);
