import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Avatar, Typography, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { Search, Book } from '@mui/icons-material';
import {Link} from "react-router-dom"

const photographers = [
  {
    id: 1,
    name: 'John Doe',
    profession: 'Wedding Photographer',
    available: true,
    priceRange: 'Medium',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Jane Smith',
    profession: 'Portrait Photographer',
    available: false,
    priceRange: 'High',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  // Add more photographers as needed...
];

const ViewPhotographer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');
  const [priceRangeFilter, setPriceRangeFilter] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAvailabilityChange = (e) => {
    setAvailabilityFilter(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRangeFilter(e.target.value);
  };

  // Filter photographers based on search, availability, and price range
  const filteredPhotographers = photographers.filter((photographer) => {
    return (
      photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (availabilityFilter === '' || photographer.available === (availabilityFilter === 'Available')) &&
      (priceRangeFilter === '' || photographer.priceRange === priceRangeFilter)
    );
  });

  return (
    <Container sx={{ mt: 5 }}>
      {/* Search Bar */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            label="Search Photographers"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: <Search />,
            }}
          />
        </Grid>

        {/* Availability Filter */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Availability</InputLabel>
            <Select
              value={availabilityFilter}
              onChange={handleAvailabilityChange}
              label="Availability"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Not Available">Not Available</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Price Range Filter */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Price Range</InputLabel>
            <Select
              value={priceRangeFilter}
              onChange={handlePriceRangeChange}
              label="Price Range"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Photographer Cards */}
      <Grid container spacing={4}>
        {filteredPhotographers.map((photographer) => (
          <Grid item xs={12} sm={6} md={4} key={photographer.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar src={photographer.avatar} alt={photographer.name} sx={{ width: 64, height: 64 }} />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" component="div">{photographer.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{photographer.profession}</Typography>
                    <Typography variant="body2" color={photographer.available ? 'green' : 'red'}>
                      {photographer.available ? 'Available' : 'Not Available'}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Book />}
                  disabled={!photographer.available}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ViewPhotographer;
