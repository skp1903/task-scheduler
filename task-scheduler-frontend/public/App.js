let countdownInterval = null;

// Function to handle the scheduling of tasks
function scheduleTask() {
    const selectedDate = document.getElementById('task-date').value;
    const selectedTime = document.getElementById('task-time').value;

    // Check if both date and time are selected
    if (!selectedDate || !selectedTime) {
        alert("Please select both date and time.");
        return;
    }

    // Combine date and time into a single string to send to the server
    const dateTime = `${selectedDate}T${selectedTime}`;

    // Send the selected date and time to the server
    fetch('http://localhost:3000/schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: dateTime })  // Send the combined date and time to the server
    })
    .then((response) => response.text())
    .then((data) => {
        console.log(data);
        alert("Task scheduled successfully!");
        // Update the task log with the scheduled time
        updateTaskLog(dateTime);

        // Start the countdown timer
        startCountdown(dateTime);
    })
    .catch((error) => {
        console.error('Error scheduling task:', error);
        alert("Failed to schedule task. Check the console for details.");
    });
}

// Function to update the task log with the scheduled time
function updateTaskLog(scheduledTime) {
    const logContainer = document.getElementById('log');
    const logEntry = document.createElement('div');
    logEntry.textContent = `Task scheduled for: ${scheduledTime}`;
    logContainer.appendChild(logEntry);
}

// Function to start the countdown timer
function startCountdown(scheduledTime) {
    const targetTime = new Date(scheduledTime).getTime();
    const countdownDisplay = document.createElement('div');
    document.body.appendChild(countdownDisplay);

    countdownInterval = setInterval(function() {
        const currentTime = new Date().getTime();
        const timeRemaining = targetTime - currentTime;
        
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = 'Time is up! Task should be done now.';
            alert(`Task to be done at ${scheduledTime}`);
        } else {
            const secondsLeft = Math.floor(timeRemaining / 1000);
            countdownDisplay.textContent = `Time remaining: ${secondsLeft} seconds`;
        }
    }, 1000);
}
