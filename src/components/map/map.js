import "./style.css";
import {Container} from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Map() {
    return (
        <Container>
            <div className="divMap">
                <Card sx={{ minWidth: 275, height: "400px" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            г. Минск,
                        </Typography>
                        <Typography sx={{ fontSize: 14, marginBottom: "20px"}} color="text.secondary" gutterBottom>
                            ул. Казинца, 89к1 этаж 3
                        </Typography>
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography sx={{ mb: 1.5, fontWeight: 'bold'}} color="text.secondary">
                            Общие вопросы
                        </Typography>
                        <Typography sx={{ mb: 3 }} color="text.secondary">
                            info@neweracourses.by
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontWeight: 'bold'}} color="text.secondary">
                            Реклама / маркетинг
                        </Typography>
                        <Typography sx={{ mb: 5 }} color="text.secondary">
                            marketin@neweracourses.by
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontWeight: 'bold'}} color="text.secondary">
                            Телефоны
                        </Typography>
                        <Typography sx={{ mb: 5 }} color="text.secondary">
                            +375 29 105-79-59 <br/>
                            +375 29 305-79-59
                        </Typography>
                    </CardContent>
                </Card>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Afc0b362f517d36d2613ec7260544b4619e2413e3a6adfa1a36171b663b427be9&amp;source=constructor"
                    width="800" height="400" frameBorder="0">

                </iframe>
            </div>
        </Container>
    );
}

export default Map;
