const TimeElement = document.getElementById('Time');
        const dateElement = document.getElementById('date');
        const startButton = document.getElementById('start');
        const stopButton = document.getElementById('stop');
        let clockInterval;

        function displayingDate() {
            const now = new Date();
            const date = now.toLocaleDateString();
            dateElement.textContent = date;
        }

        function updatingClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            TimeElement.textContent = `${hours}:${minutes}:${seconds}`;
        }

        function startClock() {
            updatingClock();
            clockInterval = setInterval(updatingClock, 1000);
        }

        function stopClock() {
            clearInterval(clockInterval);
        }

        startButton.addEventListener('click', startClock);
        stopButton.addEventListener('click', stopClock);

        displayingDate();
        startClock();