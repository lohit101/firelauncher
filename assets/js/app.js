document.getElementById('finder').addEventListener("click", finderOpen);
function finderOpen() {
    document.getElementById('finderWindow').style.opacity = '1';
    document.getElementById('finderWindow').style.pointerEvents = 'all';
}

document.getElementById('finderWindow').addEventListener("click", finderClose);
function finderClose() {
    document.getElementById('finderWindow').style.opacity = '0';
    document.getElementById('finderWindow').style.pointerEvents = 'none';
}

var current = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[current.getDay()];
document.getElementById('date').innerHTML = day + ", " + current.getHours() + ":" + current.getMinutes();