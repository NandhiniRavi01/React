import React, { useState } from 'react';
import {
  Grid,
  Box,
  TextField,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreHoriz';
import SideBar from './SideBar';
import NavBar from './NavBar';

const OrderList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [visibleRows, setVisibleRows] = useState(9); // Initial number of rows to display
  const [toggleView, setToggleView] = useState(false); // Toggles between "View More" and "View Less"


  const rows = [
    { OrderID: 1, Customer: 'John Doe', Amount: 120, Date: '2024-11-01', Status: 'Pending', Email: 'john@example.com', Action: 'ViewItem' },
    { OrderID: 2, Customer: 'Jane Smith', Amount: 75, Date: '2024-11-02', Status: 'Processing', Email: 'jane@example.com', Action: 'ViewItem' },
    { OrderID: 3, Customer: 'Alice Johnson', Amount: 90, Date: '2024-11-03', Status: 'Successful', Email: 'alice@example.com', Action: 'ViewItem' },
    { OrderID: 4, Customer: 'Bob Brown', Amount: 110, Date: '2024-11-04', Status: 'Cancelled', Email: 'bob@example.com', Action: 'ViewItem' },
    { OrderID: 4, Customer: 'Bob Brown', Amount: 110, Date: '2024-11-04', Status: 'Cancelled', Email: 'bob@example.com', Action: 'ViewItem' },{ OrderID: 4, Customer: 'Bob Brown', Amount: 110, Date: '2024-11-04', Status: 'Cancelled', Email: 'bob@example.com', Action: 'ViewItem' },{ OrderID: 4, Customer: 'Bob Brown', Amount: 110, Date: '2024-11-04', Status: 'Cancelled', Email: 'bob@example.com', Action: 'ViewItem' },{ OrderID: 4, Customer: 'Bob Brown', Amount: 110, Date: '2024-11-04', Status: 'Cancelled', Email: 'bob@example.com', Action: 'ViewItem' },{ OrderID: 4, Customer: 'Bob Brown', Amount: 110, Date: '2024-11-04', Status: 'Cancelled', Email: 'bob@example.com', Action: 'ViewItem' },
     { OrderID: 4, Customer: 'Bob Brown', Amount: 110, Date: '2024-11-04', Status: 'Cancelled', Email: 'bob@example.com', Action: 'ViewItem' }, { OrderID: 4, Customer: 'Bob Brown', Amount: 110, Date: '2024-11-04', Status: 'Cancelled', Email: 'bob@example.com', Action: 'ViewItem' }, { OrderID: 4, Customer: 'Bob Brown', Amount: 110, Date: '2024-11-04', Status: 'Cancelled', Email: 'bob@example.com', Action: 'ViewItem' }, { OrderID: 4, Customer: 'Bob Brown', Amount: 110, Date: '2024-11-04', Status: 'Cancelled', Email: 'bob@example.com', Action: 'ViewItem' },
  ];

  // Filter rows based on selected status and date
  const filteredRows = rows.filter((row) => {
    const isStatusMatch = selectedStatus ? row.Status === selectedStatus : true;
    const isDateMatch = selectedDate ? row.Date === selectedDate : true;
    return isStatusMatch && isDateMatch;
  });
  const displayedRows = filteredRows.slice(0, visibleRows);

  const handleToggleView = () => {
    if (toggleView) {
      setVisibleRows(9); // Reset to initial number of rows
    } else {
      setVisibleRows(filteredRows.length); // Show all rows
    }
    setToggleView(!toggleView); // Toggle the view state
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ display: { xs: 'none', md: 'block' }, width: '200px' }}>
        <SideBar />
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: 3, overflowY: 'auto' }}>
        <NavBar />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography variant="h4" sx={{ fontSize: '24px',mb:1 }}>
            Order List
          </Typography>

          {/* Date Filter */}
          <TextField
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ width: 220 }}
          />
        </Box>

        <Typography variant="h6" sx={{ fontSize: '20px', color: 'gray', mb: 1 }}>
          Hi, Bobby. Welcome back to Butcher Shop Admin!
        </Typography>

        {/* Filter Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          {['All', 'Pending', 'Processing', 'Successful', 'Cancelled'].map((status) => (
           <Button
           key={status}
           variant={selectedStatus === status ? 'contained' : 'outlined'}
           sx={{
             textTransform: 'none',
             width: '97px',
             height: '23px',
             borderRadius: '161px',
             background:
               status === 'All' ? 'linear-gradient(90deg, #FF0000 0%, #170D41 100%)' : 
               status === 'Pending'
               ? '#C4C4C4'
               : status === 'Processing'
               ? 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)'
               : status === 'Successful'
               ? '#0FE133'
               : status === 'Cancelled'
               ? '#EB3232'
               : 'linear-gradient(90deg, #E0E0E0 0%, #BDBDBD 100%)',
             borderColor:
               status === 'Pending'
                 ? '#C4C4C4'
                 : status === 'Processing'
                 ? '#FD749B'
                 : status === 'Successful'
                 ? '#0FE133'
                 : status === 'Cancelled'
                 ? '#EB3232'
                 : '#E0E0E0',
             color: 'white',
             '&:hover': {
               background:
                 status === 'All' ? 'linear-gradient(90deg, #FF0000 0%, #170D41 100%)' :
                 status === 'Pending'
                 ? '#C4C4C4'
                 : status === 'Processing'
                 ? 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)'
                 : status === 'Successful'
                 ? '#0FE133'
                 : status === 'Cancelled'
                 ? '#EB3232'
                 : 'linear-gradient(90deg, #E0E0E0 0%, #BDBDBD 100%)',
               borderColor:
                 status === 'Pending'
                   ? '#C4C4C4'
                   : status === 'Processing'
                   ? '#FD749B'
                   : status === 'Successful'
                   ? '#0FE133'
                   : status === 'Cancelled'
                   ? '#EB3232'
                   : '#E0E0E0',
             },
           }}
           onClick={() => setSelectedStatus(status === 'All' ? '' : status)}
         >
           {status}
         </Button>
         
          ))}
        </Box>

        {/* Order Table */}
        <TableContainer component={Paper} sx={{ height: 772, overflowY: 'auto' }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Order ID</TableCell>
        <TableCell>Customer</TableCell>
        <TableCell>Amount</TableCell>
        <TableCell>Date</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
  {displayedRows.map((row) => (
    <TableRow key={row.OrderID}>
      <TableCell>{row.OrderID}</TableCell>
      <TableCell>{row.Customer}</TableCell>
      <TableCell>${row.Amount}</TableCell>
      <TableCell>{row.Date}</TableCell>
      <TableCell>
        <Box
          sx={{
            display: 'flex',
            height: '23px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '161px',
            width: '97px',
            backgroundColor:
              row.Status === 'Pending'
                ? '#C4C4C4'
                : row.Status === 'Successful'
                ? '#0FE133'
                : row.Status === 'Cancelled'
                ? '#EB3232'
                : '#F1A800',
            color: 'white',
          }}
        >
          {row.Status}
        </Box>
      </TableCell>
      <TableCell sx={{ wordBreak: 'break-word' }}>{row.Email}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: 'none',
            width: '52px',
            height: '25px',
            background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)',
            borderRadius: 1,
            color: 'white',
            fontSize: '10px',
          }}
        >
          {row.Action}
        </Button>
        <IconButton size="small" sx={{ color: 'black' }}>
          <MoreVertIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  ))}
</TableBody>

  </Table>
  {filteredRows.length > 9 && (
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button variant="contained" onClick={handleToggleView} sx={{
            textTransform: 'none',
            width: '142px',
            height: '33px',
            background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)',
            borderRadius: '75px',
            color: 'white',
            fontSize: '12px',
          }}>
                {toggleView ? 'View Less' : 'View More'}
              </Button>
            </Box>
          )}

</TableContainer>


    </Box>
    </Box>
  );
};
export default OrderList;
