import React, { useState } from "react";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component="header"
      className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-all duration-300"
    >
      <Box className="container mx-auto px-4 py-4" display="flex" justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Box component="a" href="#" className="inline-block">
          <img
            src="https://static.readdy.ai/image/3fc0099591bed6bbd6c6cee4a5375f2b/b27e687bdd151d60a3e8e8b61610dd11.png"
            alt="IQCA Board"
            className="h-20 w-auto"
          />
        </Box>

        {/* Desktop Navigation */}
        <Box component="nav" className="hidden md:flex items-center space-x-8">
          <Button
            component="a"
            href="#"
            className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium nav-link"
          >
            Home
          </Button>
          <Button
            component="a"
            href="#about"
            className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium nav-link"
          >
            About Us
          </Button>
          <Button
            component="a"
            href="#courses"
            className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium nav-link"
          >
            Short Courses
          </Button>
          <Button
            component="a"
            href="#"
            className="text-gray-800 hover:text-primary transition-colors duration-300 font-medium nav-link"
          >
            Blog
          </Button>
        </Box>

        {/* Mobile Button */}
        <Box className="flex items-center space-x-4">
          <Button
            component="a"
            href="#contact"
            className="hidden md:inline-block bg-primary text-white px-6 py-2.5 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 whitespace-nowrap"
          >
            Book Consultation
          </Button>
          <IconButton
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          className="md:hidden"
        >
          <MenuItem onClick={handleMenuClose}>
            <Button
              component="a"
              href="#"
              className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            >
              Home
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button
              component="a"
              href="#about"
              className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            >
              About Us
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button
              component="a"
              href="#courses"
              className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            >
              Short Courses
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button
              component="a"
              href="#"
              className="text-gray-800 hover:text-primary py-2 transition-colors duration-300 font-medium"
            >
              Blog
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button
              component="a"
              href="#contact"
              className="bg-primary text-white px-6 py-2.5 rounded-button font-medium transition-all duration-300 hover:bg-opacity-90 text-center whitespace-nowrap"
            >
              Book Consultation
            </Button>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Header;
