import SideBar from './SideBar';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Grid, Typography, IconButton, Paper, Avatar, Button } from '@mui/material';
import img1 from '../../Assets/star.png'; // Fixed typo in the import path
import img2 from '../../Assets/bell.png'

const NotifiactionDesktop = () =>{
    const [currentTime, setCurrentTime] = useState('');
    const [currentDay, setCurrentDay] = useState('');
  
    // Function to get the current time in hh:mm AM/PM format
    const getCurrentTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert to 12-hour format
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${hours}:${formattedMinutes} ${ampm}`;
    };
  
    // Function to get the current day of the week
    const getCurrentDay = () => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const today = new Date();
      const todayIndex = today.getDay();
      return days.map((day, index) => {
        return index === todayIndex ? "Today" : day;
      });
    };
  
    useEffect(() => {
      setCurrentTime(getCurrentTime());
      setCurrentDay(getCurrentDay()); // Set the current day when component mounts
      const timer = setInterval(() => setCurrentTime(getCurrentTime()), 60000); // Update time every minute
      return () => clearInterval(timer); // Cleanup on unmount
    }, []);
  
    // JSON data for notifications
    const cartItemsData = [
      {
        "id": 1,
        "name": "Recipe Update",
        "image": img1,
        "description": "Weekly New Recipes! Discover our new recipes of the week!fdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      },
      {
        "id": 2,
        "name": "Event Reminder",
        "image": img2,
        "description": "Don't forget about our upcoming cooking event this weekend!"
      },
      {
        "id": 3,
        "name": "Special Offer",
        "image": img2,
        "description": "Special offer on all recipe books this week only!"
      },
      {
        "id": 4,
        "name": "Community Post",
        "image": img2,
        "description": "Join the new community discussion on best recipe tips!"
      }
    ];
  
    return (
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ display: { xs: 'none', md: 'block' }, width: '200px' }}>
          <SideBar />
        </Box>
  
        {/* Main Content */}
        <Box sx={{ flex: 1, padding: 3, overflowY: 'auto' }}>
          <NavBar />
          <Box sx={{ padding: 2 }}>
      {/* Header section */}
      <Grid container alignItems="center">
        <Grid item xs={2} sm={1} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
        </Grid>
        <Grid item xs={8} sm={10} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ fontWeight: 700, fontSize: { xs: '18px', sm: '20px' } }}>
            Notification
          </Typography>
        </Grid>
        <Grid item xs={2} sm={1} />
      </Grid>

      {/* Cart items */}
      {cartItemsData.map((item) => (
        <Grid container justifyContent="center" sx={{ mt: 4 }} key={item.id}>
          <Grid item xs={12} sm={8} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Paper component */}
            <Paper
              sx={{
                width: '603px',
                height: '127px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: 3,
                bgcolor: '#FFC6C9',
                borderRadius: '10px',
                position: 'relative',
              }}
            >
              {/* Day outside the top-left of Paper */}
              <Typography
                sx={{
                  position: 'absolute',
                  top: -25, // Adjust the positioning if necessary
                  left: -10,
                  fontSize: '13px',
                  fontWeight: 500,
                  fontFamily: 'Poppins',
                  color: '#333',
                  backgroundColor: '#fff',
                  padding: '2px 6px',
                  borderRadius: '5px',
                }}
              >
                {currentDay[0]} {/* Display "Today" for the current day */}
              </Typography>

              <Avatar
  sx={{
    width: 55, // New width for the Avatar
    height: 55, // New height for the Avatar
    ml: 2,
    bgcolor: 'white',
    '& img': {
      width: '23.75px', // New width for the image inside Avatar
      height: '25px', // New height for the image inside Avatar
    },
  }}
  src={item.image}
  alt={item.name}
/>


              <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2, maxWidth: 'calc(100% - 65px)' }}>
                <Typography
                  sx={{
                    color:'#FD5D69',                   fontSize: '13px',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    textAlign: 'left',
                    whiteSpace: 'normal',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    wordWrap: 'break-word',
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    width: '100%',
                    fontSize: '13px',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    textAlign: 'left',
                    color: '#555',
                    whiteSpace: 'normal',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    wordWrap: 'break-word',
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Paper>

            {/* Time below the Paper */}
            <Typography
              sx={{
                mt: 1, // Margin top for separation from Paper
                textAlign: 'right', // Align text to the right
                width: '603px', // Match Paper width
                fontSize: '12px',
                fontWeight: 700,
                fontFamily: 'Lato',
                color: '#555',
              }}
            >
              {currentTime}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  
  
      </Box>
      </Box>
    );
  };

export default NotifiactionDesktop