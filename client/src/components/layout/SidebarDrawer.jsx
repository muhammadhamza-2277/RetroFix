import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  IconButton,
  Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const SidebarDrawer = ({ open, toggleDrawer }) => {
  const navItems = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    {
      label: "Grants",
      children: [
        { label: "External Wall Insulation", path: "/grants/ewi" },
        { label: "Internal Wall Insulation", path: "/grants/iwi" },
        { label: "Loft Insulation", path: "/grants/loft" },
        { label: "Boiler Upgrade", path: "/grants/boiler" },
        { label: "First Time Gas Central Heating", path: "/grants/ftch" },
        { label: "Air Source Heat Pumps", path: "/grants/ashp" },
        { label: "Solar Panels", path: "/grants/solar" },
      ]
    },
    { label: "Career", path: "/career" },
    { label: "Contact", path: "/contact" }
  ];

  const [openGrants, setOpenGrants] = React.useState(false);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          width: 360, // default
          '@media (max-width:450px)': {
            width: '100%',   // full width
            // height: '100%',  // full height
            borderRadius: 0, // remove rounded corners
          },
        },
      }}
    >
      <Box
        sx={{
          width: 360,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          '@media (max-width:450px)': {
            width: '100%', // expand content too
          },
        }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
            py: 1,
            mx: 2,
            marginTop: '10px',
            border: '1px solid',
            borderRadius: 9999,
          }}
        >
          <IconButton
            component={Link} to="/home"
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                transform: 'none',
              },
            }}
          >
            <img src="/apple-icon-180x180.png" alt="RetroFix icon" width={50} />
            <Typography variant="h6" sx={{ fontWeight: 600, pl: 2 }}>
              Retrofixs Solutions
            </Typography>
          </IconButton>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Nav Links */}
        <List sx={{ mx: 2 }}>
          {navItems.map((item) => (
            <React.Fragment key={item.label}>
              {item.children ? (
                <>
                  {/* Grants parent */}
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => setOpenGrants(!openGrants)}>
                      <ListItemText primary={item.label} />
                      {openGrants ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  {/* Grants dropdown */}
                  <Collapse in={openGrants} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItem key={child.label} disablePadding>
                          <ListItemButton
                            component={Link}
                            to={child.path}
                            onClick={toggleDrawer(false)}
                            sx={{ pl: 4 }}
                          >
                            <ListItemText primary={child.label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                // Normal links
                <ListItem disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SidebarDrawer;
