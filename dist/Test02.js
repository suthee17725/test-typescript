"use strict";
function getClockAngle(hh_mm) {
    const [hour, minute] = hh_mm.split(":").map(Number);
    if (hour < 0 || hour > 24 || minute < 0 || minute >= 60) {
        throw new Error("Invalid time format or value");
    }
    const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
    const minuteAngle = minute * 6;
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
}
console.log(getClockAngle("07:00"));
console.log(getClockAngle("12:30"));
