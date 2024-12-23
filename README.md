Task Scheduler with Recurring Events and Notifications
Description:

This project is a Task Scheduler that allows users to schedule one-time tasks with a countdown timer and receive notifications when the scheduled time arrives. The task scheduler supports multiple scheduled tasks, removal of tasks, and displaying a countdown for each task.

Features:

    Schedule tasks with a specific date and time.
    Countdown timer for each scheduled task.
    Notifications when a scheduled task time arrives.
    Remove tasks from the schedule.
    Display the scheduled tasks and countdown timers dynamically.
    User-friendly front-end with interactive elements and real-time updates.

Requirements:

    Node.js and npm for running the application.
    Express.js for the back-end server.
    Cron job scheduler for managing scheduled tasks (simulated via JavaScript setInterval for this version).
    Frontend: HTML, CSS, and JavaScript for the user interface.

Getting Started:
1. Set up the Back-End:

The back-end uses Express.js to manage task scheduling. The server listens on port 3000 for incoming requests related to scheduling tasks and notifications.

To set up the back-end:

    Clone the repository or create a new folder for the back-end project.
    Run npm init and install necessary dependencies:

    npm install express

2. Start the Server:

Run the server with:

node server.js

The server will be available at http://localhost:3000.
3. Schedule a Task:

    Select a date and time from the UI to schedule a task.
    Once scheduled, the task will appear in the "Task Execution Log" along with a countdown timer showing the remaining time until the task is due.

4. Task Removal:

    Users can remove scheduled tasks by clicking the "Remove" button next to each scheduled task.

5. Notification and Countdown:

    The countdown for each task updates every second.
    When the scheduled time arrives, the system will alert the user with a pop-up message saying "Task should be done now" or something similar.

Front-End Structure:

The front-end consists of the following components:

    Date Picker: A calendar input that allows users to pick a date.
    Time Picker: A time input field to select the specific time for the task.
    Task Log: A section that displays all scheduled tasks along with their countdown timers and removal buttons.
    Notification System: Alerts the user when a task is due.



Conclusion:

This task scheduler allows users to manage their one-time tasks effectively, receive countdown timers, and be notified when their scheduled tasks are due. The application is interactive, user-friendly, and ensures timely notifications for scheduled tasks.



https://github.com/user-attachments/assets/178455f7-e8d8-4329-9afb-382050806b6e




