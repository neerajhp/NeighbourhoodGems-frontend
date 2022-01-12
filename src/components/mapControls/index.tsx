import {
  Paper,
  Box,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleMarker } from './mapControlSlice';
import { MARKERS } from '../markers';

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
              {MARKERS.map((marker) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={markerControls[marker.type]}
                      onChange={() => dispatch(toggleMarker(marker.type))}
                    />
                  }
                  label={marker.type}
                />
              ))}
            </FormGroup>
          </ControlContainer>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MapControls;
