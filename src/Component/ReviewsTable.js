import React from 'react';
import '../css/Reviewstable.css';

const ReviewsTable = () => {
  const reviews = [
    {
      review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
      userName: 'Ramon Ridwan',
      email: 'Ramonridwan@protonmail.com',
      avatar: 'https://i.pravatar.cc/50?img=1',
    },
    {
      review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
      userName: 'Ramon Ridwan',
      email: 'Ramonridwan@protonmail.com',
      avatar: 'https://i.pravatar.cc/50?img=2',
    },
    // Add more entries as needed
  ];

  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      <div className="reviews-table">
        <div className="table-header">
          <div>Reviews</div>
          <div>User Name</div>
          <div>Email</div>
          <div>Action</div>
        </div>
        {reviews.map((item, index) => (
          <div className="table-row" key={index}>
            <div className="review-text">{item.review}</div>
            <div className="user-info">
              <img src={item.avatar} alt={item.userName} />
              <span>{item.userName}</span>
            </div>
            <div>{item.email}</div>
            <div className="action">
              <button>...</button>
              <div className="dropdown">
                <div>View</div>
                <div>Delete</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="view-more-button">View More</button>
    </div>
  );
};

export default ReviewsTable;
