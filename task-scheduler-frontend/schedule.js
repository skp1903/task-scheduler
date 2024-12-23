const schedule = require('node-schedule');

// Function to schedule a job
function scheduleJob(spec, callback) {
  const job = schedule.scheduleJob(spec, callback);
  return job; // Return the job to be used in server.js for cancellation
}

module.exports = { scheduleJob };
