const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minute");
const secondEL = document.getElementById("second");
const amorpmEL = document.getElementById("AMorPM");

function updateClock() {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amorpm = "PM";
    console.log(h);

    if (h > 12) {
        h = h - 12;
        amorpm = "PM"
        console.log(amorpm);
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEL.innerText = h;
    minuteEL.innerText = m;
    secondEL.innerText = s;
    amorpmEL.innerText = amorpm;
    setTimeout(() => {
        updateClock();
    }, 1000);


}
updateClock();