function StopWatch() {
  let isRunning = false;
  let startTime = 0;
  let stopTime = 0;

  Object.defineProperty(this, 'duration', {
    get: function () {
      return (isRunning ? Date.now() - startTime : stopTime - startTime) / 1000;
    }
  })

  this.start = function () {
    if (isRunning) {
      throw new Error('StopWatch is already started');
      return;
    }
    startTime = startTime ? startTime : Date.now();
    isRunning = true;
  }
  this.stop = function () {
    if (!isRunning) {
      throw new Error('StopWatch is already stopped');
    }
    stopTime = Date.now();
    isRunning = false;
  }
  this.reset = function () {
    startTime = 0;
    stopTime = 0;
    isRunning = false
  }
}

