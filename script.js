function changeTime() {
    const time = new Date();
    const curr_second = time.getSeconds();
    const curr_minute = time.getMinutes();
    const curr_hour = time.getHours();

    const secondDeg = ((curr_second / 60) * 360) + 90;
    const minuteDeg = ((curr_minute / 60) * 360) + 90;
    const hourDeg = ((curr_hour / 12) * 360) + 90;

    // change seconds, minutes, and hours hand
    document.querySelector(".seconds-hand").style.transform = `rotate(${secondDeg}deg)`;
    document.querySelector(".minutes-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector(".hours-hand").style.transform = `rotate(${hourDeg}deg)`;

    // change digital clock
    var hour_str = "";
    var min_str = "";
    var sec_str = "";
    if (curr_hour / 10 < 1) {
        hour_str = '0' + curr_hour.toString();
    } else {
        hour_str = curr_hour.toString();
    }
    if (curr_minute / 10 < 1) {
        min_str = '0' + curr_minute.toString();
    } else {
        min_str = curr_minute.toString();
    }
    if (curr_second / 10 < 1) {
        sec_str = '0' + curr_second.toString();
        console.log("TES");
    } else {
        sec_str = curr_second.toString();
    }
    document.querySelector(".clock-num").textContent = `${hour_str} : ${min_str} : ${sec_str}`;
}

setInterval(changeTime, 1000);