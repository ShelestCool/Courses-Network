import React from "react";
import { Footer, Navigation } from "./components";
import Content from "./components/Content";

import "./style.css";

class App extends React.Component{
  render() {
      return (
          <>
                  <Navigation />
                  <Content />
                  <Footer />
          </>
      );
  }
}

export default App;
