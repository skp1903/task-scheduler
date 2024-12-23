let selectedDate = null;
let selectedTime = null;
let scheduledTasks = [];  // Store multiple scheduled tasks
let countdownIntervals = [];  // Store timers for each task

// Function to handle scheduling the task
function scheduleTask() {
  if (!selectedDate || !selectedTime) {
    alert("Please select a date and time first.");
    return;
  }

  // Combine selected date and time into a single date object
  const scheduledDate = new Date(`${selectedDate}T${selectedTime}`);
  
  // Add the scheduled task to the array
  scheduledTasks.push(scheduledDate);

  // Display the scheduled task in the task log
  updateTaskLog();

  // Start countdown for the newly added task
  const taskIndex = scheduledTasks.length - 1;  // Index of the newly added task
  startCountdown(scheduledDate, taskIndex);

  // Simulate task scheduling logic
  fetch('http://localhost:3000/schedule', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date: scheduledDate })
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
    alert("Task scheduled successfully!");
  })
  .catch(error => {
    console.error('Error scheduling task:', error);
    alert("Failed to schedule task. Check the console for details.");
  });
}

// Function to handle date change
function handleDateChange(event) {
  selectedDate = event.target.value;
  console.log("Selected Date:", selectedDate);
}

// Function to handle time change
function handleTimeChange(event) {
  selectedTime = event.target.value;
  console.log("Selected Time:", selectedTime);
}

// Function to update the task log on the page
function updateTaskLog() {
  const taskLog = document.getElementById('log');
  taskLog.innerHTML = '';  // Clear existing logs

  scheduledTasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Task scheduled for: ${task.toLocaleString()}`;

    // Create a remove button for each task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
      removeTask(index);
    };

    // Display the countdown timer for each task
    const timerDisplay = document.createElement('span');
    timerDisplay.id = `timer-${index}`;
    listItem.appendChild(timerDisplay);

    listItem.appendChild(removeButton);
    taskLog.appendChild(listItem);
  });
}

// Function to remove a task from the schedule
function removeTask(index) {
  // Remove task from scheduledTasks array and stop its timer
  scheduledTasks.splice(index, 1);
  clearInterval(countdownIntervals[index]);

  // Remove the task's timer display
  document.getElementById(`timer-${index}`).textContent = 'Task removed.';

  // Remove the task from the task log
  updateTaskLog();

  // Optionally, reset the countdown display
  document.getElementById('timer').textContent = 'Task removed from schedule.';
  alert("Task removed successfully.");
}

// Function to start the countdown timer for the newly added task
function startCountdown(scheduledDate, taskIndex) {
  const countdownInterval = setInterval(() => {
    const now = new Date();
    const remainingTime = scheduledDate - now;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      document.getElementById(`timer-${taskIndex}`).textContent = "Time is up! Task should be done now.";
      alert(`Task scheduled for ${scheduledDate.toLocaleString()} is due now!`);
    } else {
      const seconds = Math.floor((remainingTime / 1000) % 60);
      const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
      const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

      // Only show remaining time in hours, minutes, and seconds
      document.getElementById(`timer-${taskIndex}`).textContent = `Time left: ${hours}:${minutes}:${seconds}`;
    }
  }, 1000);

  // Store the interval so we can clear it later if needed
  countdownIntervals[taskIndex] = countdownInterval;
}
