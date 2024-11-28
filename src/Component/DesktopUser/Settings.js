import SideBar from './SideBar';
import NavBar from './NavBar';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
import { Box, Grid, Typography, IconButton, Paper, Avatar, TextField, MenuItem, Button } from '@mui/material';
import avatar from '../../Assets/Avatar.png'

const Settings = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isBillingOpen, setIsBillingOpen] = useState(false);

  const card = [{ BankName: "FIRST BANK NIGERIA", AccountNumber: '4386 XXXX XXXX XXX', Name: "Ramon Ridwan" }];
  
  const handleProfileToggle = () => {
    setIsProfileOpen(prevState => !prevState);
  };

  const handleBillingToggle = () => {
    setIsBillingOpen(prevState => !prevState);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar for larger screens */}
      <Box sx={{ display: { xs: 'none', md: 'block' }, width: '200px' }}>
        <SideBar />
      </Box>
      <Box sx={{ flex: 1, padding: 3, overflowY: 'auto' }}>
        <NavBar />
        <Grid container justifyContent="center" sx={{ mt: 4 }}>
          <Grid
            item
            xs={12}
            sm={8}
            md={11}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Profile Section */}
            <Paper
              sx={{
                width: '100%', // Make it responsive
                maxWidth: '1100px', // Ensure max width on larger screens
                height: '94px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', 
                boxShadow: 3,
                borderRadius: '10px',
                position: 'relative',
                padding: '0 16px', 
                mb: 0.5, 
              }}
            >
              <Typography>Profile</Typography>
              <IconButton
                sx={{
                  position: 'absolute',
                  right: '16px', 
                  top: '50%',
                  transform: 'translateY(-50%)', 
                }}
                aria-label="Scroll down"
                onClick={handleProfileToggle}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </Paper>
            
            {/* Conditionally render the profile section */}
            {isProfileOpen && (
              <Box sx={{ mt: 2, mb: 2, width: '100%' }}>
                <Avatar
                  src={avatar}
                  alt="Profile Picture"
                  sx={{ width: 114, height: 114, margin: '0 auto' }}
                />
                <Typography align="center" sx={{ mt: 2 }}>
                  The uploaded image must be 500px wide and 500px long
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', mt: 3 }}>
                  <Typography variant="subtitle1" sx={{ marginBottom: '4px' }}>
                    Name
                  </Typography>
                  <TextField
                    sx={{
                      width: '100%', 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '100px',
                      },
                    }}
                    label="Enter your Name"
                    variant="outlined"
                  />
                  <Typography variant="subtitle1" sx={{ marginBottom: '4px', mt: 2 }}>
                    Email
                  </Typography>
                  <TextField
                    sx={{
                      width: '100%', 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '100px',
                      },
                    }}
                    label="Enter your Email"
                    variant="outlined"
                  />
                  <Typography variant="subtitle1" sx={{ marginBottom: '4px', mt: 2 }}>
                    Phone
                  </Typography>
                  <TextField
                    sx={{
                      width: '100%', 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '100px',
                      },
                    }}
                    label="Enter your phone"
                    variant="outlined"
                  />
                  <Typography variant="subtitle1" sx={{ marginBottom: '4px', mt: 2 }}>
                    Nationality
                  </Typography>
                  <TextField
                    sx={{
                      width: '100%', 
                      mb: 4,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '100px',
                      },
                    }}
                    label="Enter your Nationality"
                    variant="outlined"
                    select
                    defaultValue=""
                  >
                    <MenuItem value="Indian">Indian</MenuItem>
                    <MenuItem value="American">American</MenuItem>
                    <MenuItem value="Canadian">Canadian</MenuItem>
                    <MenuItem value="Australian">Australian</MenuItem>
                    <MenuItem value="British">British</MenuItem>
                  </TextField>
                </Box>
                <Button
                  sx={{
                    textTransform: 'none',
                    width: '134px',
                    height: '42px',
                    backgroundImage: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)',
                    color: 'white',
                    borderRadius: '100px',
                    mb: 2
                  }}
                >
                  Save changes
                </Button>
              </Box>
            )}

            {/* Billing Section */}
            <Paper
              sx={{
                width: '100%',
                maxWidth: '1100px',
                height: '94px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', 
                boxShadow: 3,
                borderRadius: '10px',
                position: 'relative',
                padding: '0 16px', 
                mb: 0.5, 
              }}
            >
              <Typography>Password</Typography>
              <IconButton
                sx={{
                  position: 'absolute',
                  right: '16px', 
                  top: '50%',
                  transform: 'translateY(-50%)', 
                }}
                aria-label="Scroll down"
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </Paper>

            <Paper
              sx={{
                width: '100%',
                maxWidth: '1100px',
                height: '94px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between', 
                boxShadow: 3,
                borderRadius: '10px',
                position: 'relative',
                padding: '0 16px', 
                mb: 1, 
              }}
            >
              <Typography>Billing Information</Typography>
              <IconButton
                sx={{
                  position: 'absolute',
                  right: '16px', 
                  top: '50%',
                  transform: 'translateY(-50%)', 
                }}
                aria-label="Scroll down"
                onClick={handleBillingToggle}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </Paper>

            {isBillingOpen && (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 2 }}>
                <Typography>Fill in the bank information into which you would want your transaction return and bonuses.</Typography>
                <Box
                  sx={{
                    mt: 3,
                    width: '100%',
                    maxWidth: '300px',
                    height: '190px',
                    backgroundImage: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)',
                    border: '1px',
                    borderRadius: '20px',
                    padding: '20px'
                  }}
                >
                  <Typography sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', color: 'white' }}>Edit</Typography>
                  <Typography sx={{ mt: 2, color: 'white' }}>{card[0].BankName}</Typography>
                  <Typography sx={{ mt: 2, color: 'white' }}>{card[0].AccountNumber}</Typography>
                  <Typography sx={{ mt: 5, color: 'white' }}>{card[0].Name}</Typography>
                </Box>
                <Button
                  sx={{
                    textTransform: 'none',
                    width: '134px',
                    height: '42px',
                    backgroundImage: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)',
                    color: 'white',
                    borderRadius: '100px',
                    mt: 4 
                  }}
                >
                  Save changes
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Settings;
