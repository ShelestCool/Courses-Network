import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@material-ui/core";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

import "./style.css";

const useStyles = makeStyles({
  root: {
    width: 350,
  },
  media: {
    height: 200,
  },
});

export const Info = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className="main-grid"
      >
        <Grid className="grid-card grid-hover">
          <Card className={classes.root}>
            <CardActionArea className="grid-hover">
              <CardMedia
                className={classes.media}
                image={img1}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <p>Уделяем время каждому ученику</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid className="grid-card grid-hover">
          <Card className={classes.root}>
            <CardActionArea className="grid-hover">
              <CardMedia
                className={classes.media}
                image={img2}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <p>Сделаем из вас отличных специалистов</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid className="grid-card grid-hover">
          <Card className={classes.root}>
            <CardActionArea className="grid-hover">
              <CardMedia
                className={classes.media}
                image={img3}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <p>Поможем устроиться на работу</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Info;
