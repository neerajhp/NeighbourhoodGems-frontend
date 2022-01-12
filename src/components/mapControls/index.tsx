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
  );
};

export default MapControls;
