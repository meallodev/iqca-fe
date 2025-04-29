import React from 'react';
import { Button, Typography, Grid, Paper, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LaunchIcon from '@mui/icons-material/Launch';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-[#FAFAFA] relative overflow-hidden">
      <Box className="absolute top-0 left-0 w-full h-full">
        <Box className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></Box>
        <Box className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700"></Box>
      </Box>
      <Box className="container mx-auto px-4 relative">
        <Box className="flex flex-col md:flex-row items-center justify-between gap-12">
          <Box className="md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
            <Typography variant="h3" className="font-bold text-gray-900 leading-tight mb-6 animate-fade-in opacity-0" style={{ animation: 'fadeIn 1s ease-out forwards' }}>
              Empower Your Future with Industry-Leading Training &{' '}
              <span className="text-primary animate-text-gradient">Certifications</span>
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-8 max-w-lg animate-fade-in opacity-0" style={{ animation: 'fadeIn 1s ease-out 0.3s forwards' }}>
              Transform your career with our CPD-accredited courses in Finance, Health & Safety, and Environmental Safety. Expert-led training designed for success.
            </Typography>
            <Box className="flex flex-wrap gap-4 mb-12 animate-fade-in opacity-0" style={{ animation: 'fadeIn 1s ease-out 0.6s forwards' }}>
              <Button
                variant="contained"
                color="primary"
                href="#courses"
                className="px-8 py-3 rounded-button font-medium whitespace-nowrap flex items-center gap-2"
              >
                Get Started <ArrowForwardIcon fontSize="small" />
              </Button>
              <Button
                variant="outlined"
                href="#contact"
                className="px-8 py-3 rounded-button font-medium whitespace-nowrap flex items-center gap-2 border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                View Courses <LaunchIcon fontSize="small" />
              </Button>
            </Box>
            <Grid container spacing={8} className="animate-fade-in opacity-0" style={{ animation: 'fadeIn 1s ease-out 0.9s forwards' }}>
              <Grid item xs={4} className="transform hover:scale-105 transition-transform duration-300">
                <Typography variant="h4" className="font-bold text-primary mb-1">500+</Typography>
                <Typography variant="body2" className="text-sm text-gray-600">Certified Professionals</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h4" className="font-bold text-primary mb-1">98%</Typography>
                <Typography variant="body2" className="text-sm text-gray-600">Success Rate</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h4" className="font-bold text-primary mb-1">50+</Typography>
                <Typography variant="body2" className="text-sm text-gray-600">Expert Instructors</Typography>
              </Grid>
            </Grid>
          </Box>

          <Box className="md:w-1/2 relative animate-float" data-aos="fade-left" data-aos-duration="1000">
            <Paper elevation={6} className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20corporate%20training%20session%20in%20progress%2C%20business%20professionals%20engaged%20in%20discussion%2C%20bright%20contemporary%20office%20space%20with%20glass%20walls%20and%20modern%20furniture%2C%20professional%20atmosphere&width=800&height=600&seq=7&orientation=landscape"
                alt="Training Session"
                className="w-full h-full object-cover"
              />
            </Paper>
            <Box className="absolute -bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
              <Box className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <EmojiEventsIcon className="text-primary" fontSize="small" />
              </Box>
              <Box>
                <Typography variant="body1" className="font-medium text-gray-900">CPD Accredited</Typography>
                <Typography variant="body2" className="text-sm text-gray-600">Industry Recognized</Typography>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </section>
  );
};

export default HeroSection;
