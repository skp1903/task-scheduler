const express = require('express');
const app = express();
const port = 3000;

let taskLogs = [];  // To keep track of scheduled tasks

// Middleware to parse JSON data
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to schedule tasks
app.post('/schedule', (req, res) => {
    const { date } = req.body;
    
    if (!date) {
        return res.status(400).send('Date is required');
    }

    // Save the scheduled task log
    const task = {
        timestamp: new Date(date),
    };
    taskLogs.push(task);

    // Log the task execution (you can also schedule it to run at the specified time)
    console.log(`Scheduled task at: ${task.timestamp}`);

    // Respond with a success message
    res.send('Task scheduled successfully');
});

// Endpoint to get the current task logs
app.get('/tasks', (req, res) => {
    res.json(taskLogs);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
