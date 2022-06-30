import styled from "styled-components";

export const StyledNav = styled.div`
  .nav-menu {
    margin-left: 40px;
    color: white;
    opacity: 0.2;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    font-size: 20px;
  }
  
  header {
    background-color: rgb(44, 44, 44);
  }

  font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(http://themes.googleusercontent.com/static/fonts/opensans/v6/k3k702ZOKiLJc3WVjuplzKRDOzjiPcYnFooOUGCOsRk.woff) format('woff');
  }
  body {
    background: #000;
    font-family: 'Open Sans', sans-serif;
  }
  .logo-text {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    font-size: 30px;
  }

  .logo-text.blue {
    color: #ffffff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 40px #0000ff, 0 0 80px #0000ff, 0 0 90px #0000ff, 0 0 100px #0000ff, 0 0 150px #0000ff;
  }
`;

export default StyledNav;
