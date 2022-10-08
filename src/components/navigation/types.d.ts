interface ISideNavProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  setActiveRoute: React.Dispatch<React.SetStateAction<string>>;
}

interface ITopNavProps {
  activeRoute: string;
  handleDrawerToggle: () => void;
}

interface INavigationProps {
  children: React.ReactElement;
}
