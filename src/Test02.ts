function getClockAngle(hh_mm: string): number {
  const [hour, minute] = hh_mm.split(":").map(Number);

  if (hour < 0 || hour > 24 || minute < 0 || minute >= 60) {
    throw new Error("Invalid time format or value");
  }

  const hourAngle: number = (hour % 12) * 30 + (minute / 60) * 30;
  const minuteAngle: number = minute * 6;

  const angle: number = Math.abs(hourAngle - minuteAngle);

  return Math.min(angle, 360 - angle);
}

console.log(getClockAngle("07:00"));
console.log(getClockAngle("12:30"));
