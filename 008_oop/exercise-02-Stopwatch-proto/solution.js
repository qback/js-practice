function Stopwatch() {

  Object.defineProperties(this, {
    'startTime': {
      configurable: false,
      enumerable: false,
      writable: true
    },
    'endTime': {
      configurable: false,
      enumerable: false,
      writable: true
    },
    'duration': {
      value: 0,
      configurable: false,
      enumerable: false,
      writable: true
    },
    'running': {
      configurable: false,
      enumerable: false,
      writable: true
    }
  })

}

Stopwatch.prototype.start = function () {
  if (this.running)
    throw new Error('Stopwatch has already started.');

  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function () {
  if (!this.running)
    throw new Error('Stopwatch is not started.');

  this.running = false;
  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};
