import React from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  MoreVert,
  Notifications,
  Search as SearchIcon,
} from "@mui/icons-material";

import { drawerWidth } from "./constants";
import ColorModeContext from "../../context/ColorModeContext";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

const TopNav: React.FC<ITopNavProps> = ({
  handleDrawerToggle,
  activeRoute,
}) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  const colorMode = React.useContext(ColorModeContext);

  const theme = useTheme();

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={colorMode.toggleColorMode}>
        <IconButton
          sx={{ ml: 1 }}
          size="large"
          aria-label="mode"
          color="inherit"
        >
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <p>Mode</p>
      </MenuItem>
    </Menu>
  );

  const desktopView = (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <Notifications />
        </Badge>
      </IconButton>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        size="large"
        aria-label="mode"
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );

  const mobileView = (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreVert />
      </IconButton>
      {renderMobileMenu}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">{activeRoute}</Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {desktopView}
          {mobileView}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNav;
