import { Grid, Typography } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

const Description = () => {
  return (
    <>
      <Grid container mb={4} mt={4} sx={{ textAlign: "justify" }}>
        <Grid item xs={12}>
          <Card>
            <Typography variant="h5" component="h2" padding={1}>
              Description About Product
            </Typography>
            <Typography variant="body2" padding={2}>
              ADDITIONAL VEHICLE INFORMATION: ABS: Yes Accidental: No Adjustable
              External Mirror: Power Adjustable Steering: Yes Air Conditioning:
              Automatic Climate Control Number of Airbags: 4 airbags Alloy
              Wheels: Yes Anti Theft Device: Yes Aux Compatibility: Yes Battery
              Condition: New Bluetooth: Yes Vehicle Certified: Yes Color: Red
              Cruise Control: Yes Engine Capacity/Displacement (in Cc): 1353
              Insurance Type: Comprehensive Lock System: Remote Controlled
              Central Make Month: September Navigation System: Yes Parking
              Sensors: Yes Power steering: Yes Power Windows: Front & rear AM/FM
              Radio: Yes Rear Parking Camera: Yes Registration Place: CG
              Exchange: Yes Finance: Yes Service History: Available Sunroof: Yes
              Tyre Condition: New USB Compatibility: Yes
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Description;
