import * as React from 'react';
import { Link } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

import "./style.css";

import { Link as RouterLink } from "react-router-dom";

import logo from "../../assets/logo.png"
import pay from "../../assets/pay.png"

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
            <Box sx={{ flexGrow: 1}}>
                <Grid sx={{ display: "flex", justifyContent: "center"}} container spacing={2}>
                    <Grid item xs={2} className="grid-hover">
                        <Item className={"item-class"} sx={{background: "rgb(55,55,55)",}}>
                            <div className="grid-content footer-text-part1">
                                <div>
                                    <img src={logo} className="logo-footer"/>
                                </div>
                                <p className="company">© 2021, Courses-Network</p>
                                <p className="company2">
                                    Договор публичной оферты (физ. лица)<br/>
                                    Договор публичной оферты (юр. лица)<br/>
                                    Правила оплаты, безопасность платежей
                                </p>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={3} className="grid-hover">
                        <Item className={"item-class"} sx={{background: "rgb(55,55,55)",}}>
                            <div className="grid-content ">
                                <p className="heading-footer">Курсы в Минске</p>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Front end разработчик</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Python разработчик</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Онлайн-курсы</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Java разработчик</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>iOS разработчик</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Автоматизированное тестирование на Java</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Android разработчик</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>DevOps инженер</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>UX / UI дизайнер</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Project Manager в</Link><br/>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={3} className="grid-hover">
                        <Item className={"item-class"} sx={{background: "rgb(55,55,55)",}}>
                            <div className="grid-content">
                                <p className="heading-footer">Онлайн-курсы</p>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Front end разработчик</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Python разработчик</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Онлайн-курсы</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Java разработчик</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>iOS разработчик</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Автоматизированное тестирование на Java</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>Android разработчик</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>DevOps инженер</Link><br/>
                                <Link component={RouterLink} to="/courses" underline="hover" color={"inherit"}>UX / UI дизайнер</Link><br/>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={2} className="grid-hover">
                        <Item className={"item-class"} sx={{background: "rgb(55,55,55)"}}>
                            <div className="grid-content">
                                <p className="heading-footer">Контакты</p>
                                <p className="contacts-footer">
                                    +375 29 105-59-59<br/>
                                    +375 29 305-59-59<br/>
                                    info@neweracourses.by
                                </p>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
                <div id="footer-block2">
                    <img src={pay} className="pay"></img>
                </div>
            </Box>
    );
}
export default Footer;
