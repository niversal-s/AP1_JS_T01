"use strict";

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  let flag = true;
  function TimeToMinutes(time) {
    const [hours, minutes] = time.padStart(5, "0").split(":").map(Number);
    return hours * 60 + minutes;
  }
  const StartMinutes = TimeToMinutes(startTime);
  const dayStartMinutes = TimeToMinutes(dayStart);
  const dayEndMinutes = TimeToMinutes(dayEnd);
  const EndMinutes = StartMinutes + durationMinutes;

  if (StartMinutes < dayStartMinutes || EndMinutes > dayEndMinutes) {
    flag = false;
  }

  return flag;
}

console.log(scheduleMeeting("07:30", 15)); // true
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("07:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false
