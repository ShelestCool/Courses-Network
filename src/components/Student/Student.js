import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import "./style.css"

class Student extends React.Component{

    render() {

        return (
            <>
            <div className='div-students'>
                <Card sx={{ maxWidth: 240, margin: "15px", backgroundColor: "beige"}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/img.ong'
                            alt="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Shelest Makar
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="card-desc2">
                                Записан на курс "Front End разработка"!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="card-flex">
                        Конец курса: 22.01.2022
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 240, margin: "15px", backgroundColor: "beige"}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/img.ong'
                            alt="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tilga Klim
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="card-desc2">
                                Записан на курс "Python разработчик"!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="card-flex">
                        Конец курса: 01.04.2022
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 240, margin: "15px", backgroundColor: "beige"}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/img.ong'
                            alt="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Redko Danila
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="card-desc2">
                                Записан на курс "Java разработчик"!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="card-flex">
                        Конец курса: 17.03.2022
                    </CardActions>
                </Card>
            </div>

                <div className='div-students2'>
                    <Card sx={{ maxWidth: 240, margin: "15px", backgroundColor: "beige"}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image='/img.ong'
                                alt="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shelest Egor
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="card-desc2">
                                    Записан на курс "Android разработчик"!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="card-flex">
                            Конец курса: 15.02.2022
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 240, margin: "15px", backgroundColor: "beige"}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image='/img.ong'
                                alt="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Kovpak Vadim
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="card-desc2">
                                    Записан на курс "iOS разработчик"!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="card-flex">
                            Конец курса: 07.03.2022
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 240, margin: "15px", backgroundColor: "beige"}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image='/img.ong'
                                alt="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Vasilev Arseni
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="card-desc2">
                                    Записан на курс "FullStack C# разработчик"!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="card-flex">
                            Конец курса: 12.07.2022
                        </CardActions>
                    </Card>
                </div>
                </>
        );
    }
}

export default Student;