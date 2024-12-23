import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TaskCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
    // Fetch tasks for this date (future implementation)
  };

  return (
    <div className="calendar-container">
      <h2>Task Scheduler</h2>
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  );
};

export default TaskCalendar;
