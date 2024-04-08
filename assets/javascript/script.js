

const clock1 = () => {
    clockElement = document.getElementById("clock");
    startButtonElement = document.getElementById("startButton");
    pauseButtonElement = document.getElementById("endButton");

    let clock = new Clock(clockElement, startButtonElement, pauseButtonElement);
}

clock1();