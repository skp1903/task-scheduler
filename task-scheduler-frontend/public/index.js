// Create a socket connection
const socket = io(); // Connect to the server using socket.io

// Select the task logs element to display the logs
const taskLogElement = document.getElementById('taskLogs');

// Listen for task execution messages from the backend
socket.on('taskExecution', (taskLog) => {
  const newTaskLog = document.createElement('li');
  newTaskLog.textContent = taskLog;  // Add task log message
  taskLogElement.appendChild(newTaskLog); // Append the log to the list
});

// Function to handle task scheduling
let selectedDate = null;

function scheduleTask() {
  if (!selectedDate) {
    alert("Please select a date and time first.");
    return;
  }

  fetch('http://localhost:3000/schedule', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date: selectedDate }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      alert("Task scheduled successfully!");
    })
    .catch((error) => {
      console.error('Error scheduling task:', error);
      alert("Failed to schedule task. Check the console for details.");
    });
}

function handleDateChange(event) {
  selectedDate = event.target.value;
  console.log("Selected Date: ", selectedDate);
}
