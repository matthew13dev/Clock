class Clock {
    interval;

    constructor(clockElement, startButtonElement, pauseButtonElement) {

        this.clockElement = clockElement;
        this.startButtonElement = startButtonElement;
        this.pauseButtonElement = pauseButtonElement;

        this.startButtonElement.addEventListener("click", this.startClock());
        this.pauseButtonElement.addEventListener("click", this.pauseClock());
    
    }
    
    showTime() {
        return () => {

            let date = new Date();

            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

            let text = h + ":" + m + ":" + s;

            this.clockElement.innerHTML = text;
        }
    }

    startClock() {
        return () => {
            this.interval = setInterval(this.showTime(), 1000);
        }
    }

    pauseClock() {
        return () => {
            clearInterval(this.interval)
        }
    }
}
