import React, { useState } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Avatar,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TextsmsIcon from '@mui/icons-material/Textsms';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SettingsIcon from '@mui/icons-material/Settings';


const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row', // Ensure components stay in a row
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: isSmallScreen ? 1 : 2, // Reduce gap for smaller screens
            mt:2
          }}
        >
          {/* Search Field */}
          <TextField
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
              width: isSmallScreen ? '30%' : '40%', // Reduce width on smaller screens
              ml:isSmallScreen? 3 : 2,
            }}
            InputProps={{
              endAdornment: searchValue === '' && (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Icons and Admin Info */}
          <Box
            sx={{
              display: 'flex',
              gap: isSmallScreen ? 1 : 2, // Adjust spacing between icons
            }}
          >
            {/* Icon List */}
            {[
              { icon: <NotificationsNoneIcon />, color: '#2D9CDB26', iconColor: '#2D9CDB' },
              { icon: <TextsmsIcon />, color: '#2D9CDB26', iconColor: '#2D9CDB' },
              { icon: <CardGiftcardIcon />, color: '#5E6C9326', iconColor: '#5E6C93' },
              { icon: <SettingsIcon />, color: '#FF5B5B26', iconColor: '#FF5B5B' },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: item.color,
                  borderRadius: '50%',
                  width: isSmallScreen ? 30 : 40,
                  height: isSmallScreen ? 30 : 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {React.cloneElement(item.icon, {
                  sx: { color: item.iconColor, fontSize: isSmallScreen ? 18 : 24 },
                })}
              </Box>
            ))}

            {/* Admin Info */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: isSmallScreen ? 0.5 : 1,
                mr:2
              }}
            >
              {!isSmallScreen && (
                <>
                  <Typography variant="body1" sx={{ fontSize: '14px', color: 'black' }}>
                    Hello,
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: '14px', fontWeight: 400, color: 'black' }}
                  >
                    Admin
                  </Typography>
                </>
              )}
              <Avatar
                alt="Admin Avatar"
                src='./admin.jpeg'                sx={{ width: isSmallScreen ? 30 : 40, height: isSmallScreen ? 30 : 40 }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>

  );
};

export default NavBar;