import React, { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";

import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { drawerWidth } from "./constants";

const Navigation: React.FC<INavigationProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [activeRoute, setActiveRoute] = useState<string>("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopNav
        activeRoute={activeRoute}
        handleDrawerToggle={handleDrawerToggle}
      />

      <SideNav
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        setActiveRoute={setActiveRoute}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Navigation;
