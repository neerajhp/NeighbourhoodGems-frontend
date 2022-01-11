import {
  Paper,
  Box,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
  InputBase,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleRestaurantMarkers } from './mapControlSlice';

const ControlContainer = styled(Paper)(() => ({ padding: '16px' }));

const MapControls = () => {
  const markerControls = useAppSelector((state) => state.markers);
  const dispatch = useAppDispatch();

  return (
    <Grid container height={'100%'}>
      <Grid item xs={3}>
        <Box sx={{ display: 'grid', gap: 2, p: 2 }}>
          <ControlContainer>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={markerControls.restaurant}
                    onChange={() => dispatch(toggleRestaurantMarkers())}
                  />
                }
                label='Restaurants'
              />
              <FormControlLabel
                control={<Checkbox checked={markerControls.cafe} />}
                label='Cafes'
              />
              <FormControlLabel
                control={<Checkbox checked={markerControls.event} />}
                label='Events'
              />
            </FormGroup>
          </ControlContainer>
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default MapControls;
