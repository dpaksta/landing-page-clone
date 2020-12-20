import React, { Component } from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import "./App.css";

import pageOne from "./pages/pageOne";
import pageTwo from "./pages/pageTwo";
import pageThree from "./pages/pageThree";
import pageFour from "./pages/pageFour";
import pageFive from "./pages/pageFive";
import pageSix from "./pages/pageSix";
import { BrowserRouter as Router, Route } from "react-router-dom";

// --------------------------------------LIBRARIES AND MAIN STYLESHEET----------------------------------
import "./scss/styles.min.css";
// +++++++++++++++++++++hover library start
import "./css/hover.css";
// ----------------------hover library ends

// +++++++++++++++++++++++++++++++++ hint.css starts
//  use :  Hello Sir, <span class="hint--right hint--rounded hint--bounce" aria-label="Thank you!">hover over me.</span> -->
import "./externalLibraries/hint.css";

// ---------------------------------- hint.css ends

// --------------------------------------LIBRARIES AND MAIN STYLESHEET----------------------------------

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <>
        <Router>
          <div className="ShiftNavDownAlongWithBdy" style={{ height: "100%" }}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <main>
              <Route exact path="/" component={pageOne} />
              <Route path="/profilemenu" component={pageTwo} />
              <Route path="/bookingsmenu" component={pageThree} />
              <Route path="/aboutusmenu" component={pageFour} />
              <Route path="/signupmenu" component={pageFive} />
              <Route path="/tryForFreeMenu" component={pageSix} />
            </main>
          </div>
        </Router>
      </>
    );
  }
}

export default App;

// properties  in  js are just the varables attached inside an object
