import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Breadcrumbs,
  Typography,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import StyledNav from "./style";

function Navigation() {
  return (
    <StyledNav>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <Typography variant="h4" className="logo-text blue">
              Courses-Network
            </Typography>
            <Breadcrumbs className="nav-menu" aria-label="breadcrumb">
              <Link color="inherit" component={RouterLink} to="/">
                Номе
              </Link>
              <Link color="inherit" component={RouterLink} to="/courses">
                Courses
              </Link>
              <Link color="inherit" component={RouterLink} to="/students">
                Students
              </Link>
              <Link color="inherit" component={RouterLink} to="/About">
                About
              </Link>
            </Breadcrumbs>
          </Toolbar>
        </Container>
      </AppBar>
    </StyledNav>
  );
}

export default Navigation;

