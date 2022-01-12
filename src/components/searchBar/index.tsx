import { Paper, Box, Grid, InputBase, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const ControlContainer = styled(Paper)(() => ({ padding: '16px' }));

const SearchBar = () => {
  return (
    <ControlContainer>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <InputBase
          sx={{ ml: 1, flexGrow: 1 }}
          placeholder='Find something new'
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Box>
    </ControlContainer>
  );
};

export default SearchBar;
