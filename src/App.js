import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Use Routes instead of Switch
import Customer from "./Component/Customer";
import CustomerDetails from './Component/CustomerDetails';
import AddCustomer from './Component/AddCustomer';
import Chat from './Component/Chat';
import RecipePage from './Component/RecipePage';
import AddRecipe from './Component/AddRecipe';
import ChickenRecipe from './Component/ChickenRecipe';
import ReviewsTable from './Component/ReviewsTable';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';



function App() {
  return (
    <Router> {/* Wrapping the entire app in Router */}
     
      <div className="content">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Customer />} /> {/* Use element prop with JSX */}
          <Route path="/customer-details" element={<CustomerDetails />} />
           <Route path="/add-customer" element={<AddCustomer />} />
           <Route path="/reviews" element={<ReviewsTable />} />
           <Route path="/chat" element={<Chat />} />
          

           <Route path="/recipe" element={<RecipePage/>} />
          <Route path="/add-recipe" element={<AddRecipe/>} />
          <Route path="/chicken-recipe" element={<ChickenRecipe/>} />
          
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

