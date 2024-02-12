import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Button,
} from "@mui/material";
import Description from "./Description";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Kia Seltos (2020)
              </Typography>
              <Typography variant="body2" component="p">
                1.4 GTX+ DCT Dual tone
              </Typography>
              <hr />
            </CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card sx={{ bgcolor: "#0011" }}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      PETROL
                    </Typography>
                    <Typography variant="body2" component="p">
                      This is petrol variant.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ bgcolor: "#0011" }}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      AUTOMATIC
                    </Typography>
                    <Typography variant="body2" component="p">
                      This is automatic variant. .
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Overview
              </Typography>
              <hr />
            </CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ bgcolor: "#0011" }}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      Owner
                    </Typography>
                    <Typography variant="body2" component="p">
                      1st
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ bgcolor: "#0011" }}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      Location
                    </Typography>
                    <Typography variant="body2" component="p">
                      Kolkata
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Card sx={{ bgcolor: "#0011" }}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      date
                    </Typography>
                    <Typography variant="body2" component="p">
                      21-DEC-23
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ bgcolor: "#0011" }}>
            <CardContent>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontWeight: "bolder" }}
              >
                ₹ 7,99,999
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bolder" }}
              >
                Owner Name : M S Motors
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" component="h2">
                UNITECH THE CHAMBERS, ROOM NO 205 1865 RAJDANGA MAIN ROAD,
                Opposite Acropolish Mall, Kolkata, West Bengal
              </Typography>
              <br />
              <a href="#">
                <Button variant="contained" component="p">
                  Contact with seller
                </Button>
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Description />
    </Container>
  );
};

export default Cards;
