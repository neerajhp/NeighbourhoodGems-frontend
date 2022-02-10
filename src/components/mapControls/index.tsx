import {
  Paper,
  Box,
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { togglelandmark } from "./mapControlSlice";
import { icons } from "../landmark/icons";

/** Styles */
const ControlContainer = styled(Paper)(() => ({ padding: "16px" }));

/**
 * Map Controls component
 *
 * @author Neeraj Patel
 */
const MapControls = () => {
  const landmarkControls = useAppSelector((state) => state.landmarks);
  const dispatch = useAppDispatch();

  return (
    <ControlContainer>
      <FormGroup>
        {icons.map((landmark, idx) => (
          <FormControlLabel
            key={idx}
            control={
              <Checkbox
                checked={landmarkControls[landmark.type]}
                onChange={() => dispatch(togglelandmark(landmark.type))}
              />
            }
            label={landmark.name}
          />
        ))}
      </FormGroup>
    </ControlContainer>
  );
};

export default MapControls;
