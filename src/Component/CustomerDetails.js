import React, { useState } from "react";
import "../css/Customerdetails.css";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";

const CustomerDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [overviewData, setOverviewData] = useState({
    address: "Panapur Langa, Hajipur, Vaishali, 844124, India",
    email: "randhirppl@gmail.com",
    phone: "+91 8804789764",
  });
  const [customerInfo, setCustomerInfo] = useState({
    name: "Randhir Kumar",
    location: "India",
    orderCount: 5,
    customerSince: "2 years",
    rating: 5,
  });
  const [orders, setOrders] = useState([
    { orderId: "001", date: "2024-10-01", status: "Delivered", price: "$50" },
    { orderId: "002", date: "2024-10-05", status: "Pending", price: "$30" },
  ]);
  const [tags, setTags] = useState(["Vip Customer", "Europe"]);
  const [newTag, setNewTag] = useState("");

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => setIsEditing(false);
  const handleCancelClick = () => {
    setOverviewData({
      address: "Panapur Langa, Hajipur, Vaishali, 844124, India",
      email: "randhirppl@gmail.com",
      phone: "+91 8804789764",
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOverviewData({ ...overviewData, [name]: value });
  };

  const handleTagChange = (e) => setNewTag(e.target.value);

  const handleAddTag = () => {
    if (newTag.trim() !== "") {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  return (
    <div className="container">
        <Sidebar />
        <main className="main">
          <header className="header">
           
          </header>

          <div>
           
            <NavBar />
          </div>
      <br />
      <div className="customer-header">
        <a href="#" className="back-button">
          <i className="fas fa-arrow-left"></i> Back
        </a>
        <div className="flex-button">
          <h4>Customer Information</h4>
          <div className="customer-actions">
            <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
            <button className="save-button" onClick={handleSaveClick}>Save</button>
          </div>
        </div>
      </div>

      <div className="customer-content">
        {/* Left Side: Customer Info */}
        <div className="customer-left">
          <div className="customer-profile">
            <div className="customer-avatar">R</div>
            <div className="customer-details">
              <h3>{customerInfo.name}</h3>
              <p>{customerInfo.location}</p>
              <p>{customerInfo.orderCount} Orders</p>
              <p>Customer for {customerInfo.customerSince}</p>
            </div>
            <div className="customer-rating">
              {[...Array(customerInfo.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
          </div>

          <div className="horizontal-line"></div>
          <div className="customer-notes">
            <h4>Customer Notes</h4>
            <textarea placeholder="Add notes about customer"></textarea>
          </div>

          {/* Orders Section */}
          <div className="customer-orders">
            <h4>Customer Orders</h4>
            <table className="customer-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.orderId}</td>
                    <td>{order.date}</td>
                    <td><p className={`status ${order.status.toLowerCase()}`}>{order.status}</p></td>
                    <td>{order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side: Overview */}
        <div className="customer-right">
          <div className="customer-overview">
            <div className="flex-button">
              <h4>Overview</h4>
              {isEditing ? (
                <button onClick={handleSaveClick}style={{border:'none',backgroundColor:"white",color:'red'}}>Save</button>
              ) : (
                <button onClick={handleEditClick} style={{border:'none',backgroundColor:"white",color:'blue'}}>Edit</button>
              )}
            </div>

            {isEditing ? (
              <>
                <p>Address:</p>
                <textarea
                  name="address"
                  value={overviewData.address}
                  onChange={handleChange}
                />
                <p>Email Address:</p>
                <input
                  type="email"
                  name="email"
                  value={overviewData.email}
                  onChange={handleChange}
                />
                <p>Phone:</p>
                <input
                  type="text"
                  name="phone"
                  value={overviewData.phone}
                  onChange={handleChange}
                />
              </>
            ) : (
              <>
                <p>Address:</p>
                <p>{overviewData.address}</p>
                <p>Email Address:</p>
                <p>{overviewData.email}</p>
                <p>Phone:</p>
                <p>{overviewData.phone}</p>
              </>
            )}

<div className="delete-container">
  <div className="horizontal-line"></div>
  <button
    className="delete-button"
    onClick={() => {
      const confirmDelete = window.confirm("Are you sure you want to delete this customer?");
      if (confirmDelete) {
        // Clear customer details
        setCustomerInfo({
          name: "",
          location: "",
          orderCount: 0,
          customerSince: "",
          rating: 0,
        });
        setOverviewData({
          address: "",
          email: "",
          phone: "",
        });
        setOrders([]);
        setTags([]);
        // Optional: Make an API call to delete the customer from the database
        // deleteCustomer();
      }
    }}
  >
    Delete Customer
  </button>
</div>

          </div>

          <div className="customer-tags">
  <h4>Tags</h4>
  <input
    type="text"
    value={newTag}
    onChange={handleTagChange}
    placeholder="Enter tag name"
  />
  <button onClick={handleAddTag}>Add Tag</button>
  <div className="tag-list">
    {tags.map((tag, index) => (
      <span key={index} className="tag">
        {tag}
        <button
          className="delete-tag-button"
          onClick={() => {
            const updatedTags = tags.filter((_, i) => i !== index);
            setTags(updatedTags);
          }}
        >
          <i className="fas fa-times"></i>
        </button>
      </span>
    ))}
  </div>
</div>

        </div>
      </div>
      </main>
    </div>
  );
};

export default CustomerDetails;
