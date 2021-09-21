var dday = Date.parse("2021-10-22 06:30")
function countdown() {
    var now = new Date();
        var distance = dday - now;
        var d = Math.floor(distance / (1000 * 60 * 60 * 24));
        var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((distance % (1000 * 60)) / 1000);
        var buffer = '';
        if (s < 10) {
            s = '0' + s;
        }
        if (distance < 0) {
            document.getElementById('description').innerText = "이 분 전역했다고 합니다. 글 내려주세요.";
            document.getElementById('countdown-date').innerText = 'D+' + (d*-1);
            document.getElementById('countdown-time').innerText = '';
        } else {
            if (d > 0) {
                document.getElementById('countdown-date').innerText = 'D-' + d;
            }
            if (h > 0) {
                buffer = buffer + h + '시간 ';
            }
            if (m > 0) {
                buffer = buffer + m + '분 ';
            }
            document.getElementById('countdown-time').innerText = buffer + s + '초';
        }
    setTimeout(countdown, 1000);
}