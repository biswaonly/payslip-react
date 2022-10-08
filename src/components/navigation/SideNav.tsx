/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { drawerWidth, menuArr } from "./constants";

const SideNav: React.FC<ISideNavProps> = ({
  mobileOpen,
  handleDrawerToggle,
  setActiveRoute,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const activeRoute = menuArr.find(
      ({ path, title }) => location.pathname === path
    );
    activeRoute && setActiveRoute(activeRoute?.title);
  }, []);

  const drawer = (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `${drawerWidth}px`,
          left: 0,
          height: { sm: "64px" },
        }}
      >
        <Toolbar>
          <Typography variant="h5" gutterBottom>
            LOGO
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Divider />
      <List>
        {menuArr.map(({ title, icon, path }) => {
          const MenuIcon = icon;
          return (
            <ListItem key={title} disablePadding>
              <ListItemButton
                selected={location.pathname === path}
                onClick={() => {
                  navigate(path);
                  setActiveRoute(title);
                }}
              >
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideNav;
