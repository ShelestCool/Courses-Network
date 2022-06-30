import styled from "styled-components";

import cod from "../../assets/cod.jpg"

const Styles = styled.div`
  .div-content {
    display: flex;
    align-items: center;
    background: url(${cod}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 580px;
    position: relative;
    z-index: -2;
    margin-bottom: 30px;
  }

  .Add-Info-overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .text-part3 {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 45px;
    font-family: "Gabriela", serif;
    opacity: 0.8;
  }
`;
export default Styles;
