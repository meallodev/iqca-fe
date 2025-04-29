import React from "react";
import { Box, Button, Grid, Typography, IconButton } from "@mui/material";
import { CreditCard, AccountBalance, AttachMoney, Apple } from "@mui/icons-material";


const Footer = () => {
  return (
    <Box className="bg-[#243A74] text-white pt-16 pb-8">
      <Box className="container mx-auto px-4">
        <Grid container spacing={8} mb={12}>
          {/* Logo and Social Icons */}
          <Grid item xs={12} md={3}>
            <Box component="a" href="#" className="inline-block mb-6">
              <img
                src="https://static.readdy.ai/image/3fc0099591bed6bbd6c6cee4a5375f2b/b27e687bdd151d60a3e8e8b61610dd11.png"
                alt="IQCA Board"
                className="h-24 w-auto"
              />
            </Box>
            <Typography variant="body2" color="textSecondary" className="mb-6">
              IQCA Board is a premier CPD-accredited training provider delivering expert-led courses in finance, health & safety, and environmental safety.
            </Typography>
            <Box display="flex" gap={2}>
            <IconButton className="text-gray-400">
            <CreditCard fontSize="large" />
            </IconButton>
            <IconButton className="text-gray-400">
            <AccountBalance fontSize="large" />
            </IconButton>
            <IconButton className="text-gray-400">
            <AttachMoney fontSize="large" />
            </IconButton>
            <IconButton className="text-gray-400">
            <Apple fontSize="large" />
            </IconButton>

            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-6">
              Quick Links
            </Typography>
            <Box component="ul" className="space-y-3">
              <Button href="#" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link">
                Home
              </Button>
              <Button href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link">
                About Us
              </Button>
              <Button href="#courses" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link">
                Courses
              </Button>
              <Button href="#" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link">
                Blog
              </Button>
              <Button href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 quick-link">
                Contact
              </Button>
            </Box>
          </Grid>

          {/* Course Categories */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-6">
              Course Categories
            </Typography>
            <Box component="ul" className="space-y-3">
              <Button href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Finance
              </Button>
              <Button href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Health & Safety
              </Button>
              <Button href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Environmental Safety
              </Button>
              <Button href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Corporate Training
              </Button>
              <Button href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Certification Programs
              </Button>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="font-semibold mb-6">
              Contact Information
            </Typography>
            <Box component="ul" className="space-y-3">
              <Box display="flex" alignItems="center">
                <Box className="w-5 h-5 flex items-center justify-center text-primary mr-3 mt-1">
                  <i className="ri-map-pin-line"></i>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  123 Business Avenue, London, UK
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Box className="w-5 h-5 flex items-center justify-center text-primary mr-3 mt-1">
                  <i className="ri-phone-line"></i>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  +44 (0) 20 1234 5678
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Box className="w-5 h-5 flex items-center justify-center text-primary mr-3 mt-1">
                  <i className="ri-mail-line"></i>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  info@iqcaboard.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Box className="w-5 h-5 flex items-center justify-center text-primary mr-3 mt-1">
                  <i className="ri-time-line"></i>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  Mon-Fri: 9:00 AM - 5:00 PM
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Payment Options */}
        <Box className="pt-8 border-t border-gray-800 text-center">
          <Box display="flex" justifyContent="center" gap={4} mb={6}>
          <IconButton className="text-gray-400">
            <CreditCard fontSize="large" />
            </IconButton>
            <IconButton className="text-gray-400">
            <AccountBalance fontSize="large" />
            </IconButton>
            <IconButton className="text-gray-400">
            <AttachMoney fontSize="large" />
            </IconButton>
            <IconButton className="text-gray-400">
            <Apple fontSize="large" />
          </IconButton>

          </Box>

          {/* Footer Bottom */}
          <Typography variant="body2" color="textSecondary" className="text-sm">
            &copy; 2025 IQCA Board. All rights reserved. |{" "}
            <Button href="#" color="inherit" className="hover:text-white">
              Privacy Policy
            </Button>{" "}
            |{" "}
            <Button href="#" color="inherit" className="hover:text-white">
              Terms of Service
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
