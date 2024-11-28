import React from 'react';
import '../css/Notification.css';

const notifications = [
  { id: 1, title: 'Weekly New Recipes!', description: 'Discover our new recipes of the week!', time: '2 Min Ago', date: '', icon: 'fas fa-star' },
  { id: 2, title: 'Meal Reminder', description: 'Time to cook your healthy meal of the day', time: '35 Min Ago', date: '', icon: 'fas fa-bell' },
  { id: 3, title: 'New Update Available', description: 'Performance improvements and bug fixes.', time: '', date: '25 April 2024', icon: 'fas fa-bell' },
  { id: 4, title: 'Reminder', description: "Don't forget to complete your profile to access all app features", time: '', date: '25 April 2024', icon: 'fas fa-star' },
  { id: 5, title: 'Important Notice', description: 'Remember to change your password regularly to keep your account secure', time: '', date: '25 April 2024', icon: 'fas fa-star' },
];

const Notification = () => {
  return (
    <div className="notifications-container">
      <div className="header">
        <span>Notification</span>
      </div>
      <div className="notifications">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <div className="notification-icon">
              <i className={notification.icon}></i>
            </div>
            <div className="notification-content">
              <div className="notification-title">{notification.title}</div>
              <div className="notification-description">{notification.description}</div>
              <div className="notification-time">
                {notification.time ? <span>{notification.time}</span> : <span>{notification.date}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
