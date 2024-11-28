import React, { useState } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Avatar,
  Typography,
  Grid,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TextsmsIcon from '@mui/icons-material/Textsms';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SettingsIcon from '@mui/icons-material/Settings';
import admin from '../Assessts/admin.png';

const NavBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Grid item xs={12} md={9} lg={10}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: { xs: 2, sm: 1 },
          gap: 2,
        }}
      >
        {/* Top Section */}
        <Grid container spacing={2} alignItems="center">
          {/* Search Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search..."
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
              }}
              InputProps={{
                endAdornment: searchValue === '' && (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Icons and Admin Info */}
          <Grid item xs={12} sm={6}>
            <Grid
              container
              spacing={isSmallScreen ? 0.5 : 1}
              justifyContent={isSmallScreen ? 'center' : 'flex-end'}
              alignItems="center"
            >
              {/* Icon List */}
              {[
                { icon: <NotificationsNoneIcon />, color: '#2D9CDB26', iconColor: '#2D9CDB' },
                { icon: <TextsmsIcon />, color: '#2D9CDB26', iconColor: '#2D9CDB' },
                { icon: <CardGiftcardIcon />, color: '#5E6C9326', iconColor: '#5E6C93' },
                { icon: <SettingsIcon />, color: '#FF5B5B26', iconColor: '#FF5B5B' },
              ].map((item, index) => (
                <Grid item key={index}>
                  <Box
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
                </Grid>
              ))}

              {/* Admin Info */}
              <Grid item>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isSmallScreen ? 0.5 : 1,
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
                    src={admin}
                    sx={{ width: isSmallScreen ? 30 : 40, height: isSmallScreen ? 30 : 40 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default NavBar;