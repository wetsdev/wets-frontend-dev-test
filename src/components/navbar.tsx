import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import logo from "./../assets/logo-white.png";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    key: 0,
    item: "Pokémon list",
    icon: <CatchingPokemonIcon fontSize="small" />,
  },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  function Logout() {
    localStorage.removeItem("jwt");
    navigate("/login");
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Box
              component="img"
              sx={{ display: { xs: "none", md: "flex" }, mr: 12, height: 40 }}
              alt="Logo"
              src={logo}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <Typography textAlign="center">{page.item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link href="/">
            <Box
              component="img"
              sx={{ display: { xs: "flex", md: "none" }, mr: 10, height: 25 }}
              alt="Logo"
              src={logo}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.key}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white" }}
                startIcon={page.icon}
              >
                {page.item}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://robohash.org/user.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
                  <Typography textAlign="center" onClick={Logout}>Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
