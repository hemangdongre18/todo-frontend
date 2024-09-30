import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './CalendarHeatmap.css'; // Custom CSS for styling

const CalendarHeatmapComponent = () => {
  // Example data for the calendar, you can modify this as needed
  const today = new Date();
  const values = [
    { date: '2024-01-01', count: 1 },
    { date: '2024-01-02', count: 4 },
    { date: '2024-01-03', count: 2 },
    // Add more data here to populate the calendar
  ];

  return (
    <div className="calendar-design-container">
      <h2>Your Activity</h2>
      <CalendarHeatmap
        startDate={new Date(today.getFullYear(), today.getMonth() - 3, 1)}
        endDate={today}
        values={values}
        showWeekdayLabels={false} // Hide the weekday labels
        classForValue={(value) => {
          if (!value) return 'color-empty';
          return `color-scale-${value.count}`;
        }}
        showMonthLabels={true}  // Display month labels only
      />
    </div>
  );
};

export default CalendarHeatmapComponent;
