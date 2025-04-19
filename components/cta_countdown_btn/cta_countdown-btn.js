const countdownKey = 'magneticCodeCountdownTimer1';
const timerElement = document.querySelector('[data-promo-text-countdown-timer]');
const countdownDuration = 15 * 60 * 10000; // 15 minutes in milliseconds

// Load or initialize countdown end time
let endTime = localStorage.getItem(countdownKey);
if (!endTime || new Date().getTime() > parseInt(endTime)) {
    endTime = new Date().getTime() + countdownDuration;
    localStorage.setItem(countdownKey, endTime);
} else {
    endTime = parseInt(endTime);
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {
        timerElement.textContent = "00:00:00";
        return;
    }

    const hours = Math.floor(distance / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

    timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);