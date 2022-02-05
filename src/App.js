import React, { Component } from "react";
import Layout from "./components/UI/Layout/Layout";
// import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
// import CheckOut from "./containers/CheckOut/CheckOut";
// import { Route, Routes } from "react-router-dom";

// import HOCKS from "./hoc/UseProps/RouteProps"
import RouteProject from "./routes/RouteProject";
/////////routes instead of switch

class App extends Component {
  render() {
    return <div>
      <Layout>
        {RouteProject()}
      </Layout>
    </div>;
  }
}
export default App