import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import "./style.css"

class Course extends React.Component{

    render() {

        const {image, name, price, desc, status } = this.props.details;

        const isAvailable = status === 'available';

        return (
                <Card sx={{ maxWidth: 345, margin: "15px", backgroundColor: "beige"}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={image}
                            alt="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="card-desc">
                                {desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="card-flex">
                        <p className="price">{price} $</p>
                        <Button className="button-buy" variant="outlined" size="medium" disabled={!isAvailable}>
                            {isAvailable ? 'Записаться на курс' : 'Временно нет!!!'}
                        </Button>
                    </CardActions>
                </Card>
        );
    }
}

export default Course;
