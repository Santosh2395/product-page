import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import "./products.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Typography } from "@mui/material";

const cards = [
  {
    image: "https://apollo.olx.in/v1/files/gk4mnoi59nat3-IN/image",
    title: "₹ 17,99,999",
    subtitle: "kia 1.4 GTX+ DCT Dual tone",
  },
  {
    image: "https://apollo.olx.in/v1/files/20sls3n9iqhu2-IN/image",
    title: "₹ 14,99,999",
    subtitle: "kia HTX IVT Dual tone",
  },
  {
    image: "https://apollo.olx.in/v1/files/0h3a56boa8sa-IN/image",
    title: "₹ 12,99,999",
    subtitle: "kia seltos 1.5 HTK PLUS  ",
  },
];

const useStyles = makeStyles({
  root: {
    padding: "10px",
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    minWidth: "230px",
    maxWidth: "315px",
    width: "100%",
    color: "black",
    fontSize: "16px",
    textAlign: "left",
    borderRadius: "25px",
  },
  media: {
    width: "100%",
    height: "40vh",
    objectFit: "cover",
  },
});

function Products() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  // console.log(settings);

  return (
    <div className={classes.app}>
      <Container>
        <h3>Related Products</h3>

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              gap: 2,
              margin: { xs: "0 4rem 0 0rem", sm: "0 0rem 0 0rem", md: 0 },
              textAlign: { xs: "center" },
            }}
          >
            <Slider {...settings}>
              {cards.map((item, index) => (
                <div key={index}>
                  <Article data={item} classes={classes} />
                </div>
              ))}
            </Slider>
          </Grid>
          <Grid item xs={12} md={4} sx={{ margin: { xs: "2rem", md: 0 } }}>
            <Card
              sx={{ ml: 4, p: 2, textAlign: "justify", marginTop: { xs: 2 } }}
            >
              <Typography variant="h6" component="h2" paddingBottom={2}>
                Advertisement ID: 1755680393
              </Typography>
              <Typography variant="body2">
                The kia is available in a variety of trim levels, so you can
                find the perfect one to fit your needs and budget. The kia also
                comes standard with a suite of safety features, including
                automatic emergency braking, lane departure warning, and
                adaptive cruise control.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

function Article({ data, classes }) {
  return (
    <Card className={classes.root}>
      <a href="#">
        <img src={data.image} alt={data.title} className={classes.media} />
      </a>
      <div className={classes.cardContent}>
        <h4 style={{ marginTop: 8, fontWeight: "bold" }}>{data.title}</h4>
        <p>{data.subtitle}</p>
      </div>
    </Card>
  );
}

export default Products;
