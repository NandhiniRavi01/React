import React, { useState } from 'react';
import '../css/Addcustomer.css';
import Sidebar from './Sidebar';
import NavBar from './NavBar';

const AddCustomer = () => {
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    apartment: '',
    city: '',
    country: '',
    postalCode: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle save logic here
    console.log('Customer Info Submitted:', customerInfo);
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

    <div className="add-customer-container">
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h3>Customer Information</h3>
          <p>Most important information about the customer</p>
          
  <div className="input-group">
    <div className="input-field">
      <p>First Name</p>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={customerInfo.firstName}
        onChange={handleChange}
      />
    </div>
    <div className="input-field">
      <p>Last Name</p>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={customerInfo.lastName}
        onChange={handleChange}
      />
    </div>
</div>

<div className="input-group">
<div className="input-field">
<p>Email</p>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={customerInfo.email}
            onChange={handleChange}
          />
          </div>
          <div className="input-field">
            <p>Phone Number</p>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={customerInfo.phoneNumber}
            onChange={handleChange}
          />
        </div>
        </div>
    </div>

        <div className="section">
          <h3>Customer Address</h3>
          <p>Shipping address information</p>
          <div className="input-group">
<div className="input-field">
<p>Address</p>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={customerInfo.address}
            onChange={handleChange}
          />
          </div>
          
          <div className="input-field">
            <p>Apartment</p>
          <input
            type="text"
            name="apartment"
            placeholder="Apartment"
            value={customerInfo.apartment}
            onChange={handleChange}
          />
          </div>
          </div>
          <br></br>
          <div className="input-group">
          <div className="input-field">
          <p>City</p>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={customerInfo.city}
            onChange={handleChange}
          />
          </div>
          <div className="input-field">
          <p>Country</p>
          <select
            name="country"
            value={customerInfo.country}
            onChange={handleChange}
          >
            <option value="">Choose Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            {/* Add more countries as needed */}
          </select>
          </div> <div className="input-field">
          <p>Postal Code</p>
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={customerInfo.postalCode}
            onChange={handleChange}
          />
          </div>
          </div>
        </div>
        <div className="input-phone">
          <p>Phone</p>
          <input
            type="text"
            name="phone"
            placeholder=""
            value={customerInfo.phone}
            onChange={handleChange}
          />
          </div>

        <div className="section">
          <h3>Customer Notes</h3>
          <p>Add notes about customer</p>
          <br></br>
          <p>Notes</p>
          <textarea
            name="notes"
            placeholder="Add notes about customer"
            value={customerInfo.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        

        <div className="customer-actions">
          <button type="button" className="cancel-button">Cancel</button>
          <button type="submit" className="save-button">Save</button>
        </div>
      </form>
    </div>
    </main>
      </div>
  );
};

export default AddCustomer;
