import React, { Fragment, Component } from "react";
import SideDrawer from "../../navigation/SideDrawer/SideDrawer";
import ToolBar from "../../navigation/ToolBar/ToolBar";
import style from "./Layout.module.css"


class Layout extends Component {
  state = {
    showSideDrawer: true,
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }
  render() {
    return (
      <Fragment>
        <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <main className={style.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
};

export default Layout;
