import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './Dashboard.css'; // Custom CSS file for overall styling
import './CalendarHeatmap.css'; // Additional styling for the calendar

const Dashboard = () => {
  const today = new Date();
  const values = [
    { date: '2024-01-01', count: 1 },
    { date: '2024-01-02', count: 4 },
    { date: '2024-01-03', count: 2 },
    // Add more dates and counts as needed
  ];

  // Data for the table
  const names = [
    { no: 1, name: 'LeetCode' },
    { no: 2, name: 'GitHub' },
    // Add more names as needed
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="project-title">
          <h1>TooDo!</h1>
        </div>
        <div className="profile">
          <img 
            src="path_to_profile_image.jpg" 
            alt="Profile" 
            className="profile-photo"
          />
        </div>
      </header>

      <section className="dashboard-content">
        <div className="calendar-container">
          <h2>Your Activity</h2>
          <div className="calendar">
            <CalendarHeatmap
              startDate={new Date(today.getFullYear(), today.getMonth() - 6, 1)}
              endDate={today}
              values={values}
              classForValue={(value) => {
                if (!value) return 'color-empty';
                return `color-scale-${value.count}`;  // Adjust colors based on value count
              }}
              tooltipDataAttrs={(value) => {
                return {
                  'data-tip': `${value.date} has count: ${value.count}`,
                };
              }}
              showWeekdayLabels={true}
            />
          </div>
        </div>

        <div className="table-container">
          <h2>Name List</h2>
          <table className="name-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {names.map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
