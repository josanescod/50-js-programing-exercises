"use strict";
/*Make a clock that in real time shows the time every second.
You can only use the date object to get the time for the first time, but not to update the time.*/

/*function fastClock() {
  setInterval(() => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const clock = `${hours}:${minutes}:${seconds}`;
    console.clear();
    console.log(clock);
  }, 1000);
}*/

class Clock {
  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
  }

  update(seconds) {
    this.seconds += seconds;

    //upate seconds
    if (this.seconds >= 60) {
      this.minutes++;
      this.seconds = 0;
    }
    //update minutes
    if (this.minutes >= 60) {
      this.hours++;
      this.minutes = 0;
    }

    //update hours
    if (this.hours >= 24) {
      this.hours = 0;
    }
  }

  show() {
    this.update(1);
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  start() {
    setInterval(() => {
      console.clear();
      this.show();
    }, 1000);
  }
}

let myClock = new Clock();
myClock.start();
