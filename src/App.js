import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./layouts/Main";

import Home from "./routes/home";
import Counter from "./routes/counter";
import Toggle from "./routes/toggle";
import FontSizer from "./routes/font-sizer";
import Align from "./routes/align";
import Clock from "./routes/clock";
import ColorChange from "./routes/color-change";
import ShowHide from "./routes/show-hide";

import "./global.scss";

export default function App() {
  return (
    <div className="monitor-box">
      <div className="monitor-inner-box">
        <div className="monitor-screen">
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Main>
                    <Home />
                  </Main>
                )}
              />
              <Route
                path="/counter"
                render={() => (
                  <Main>
                    <Counter />
                  </Main>
                )}
              />
              <Route
                path="/toggle"
                render={() => (
                  <Main>
                    <Toggle />
                  </Main>
                )}
              />
              <Route
                path="/font-sizer"
                render={() => (
                  <Main>
                    <FontSizer />
                  </Main>
                )}
              />
              <Route
                path="/align"
                render={() => (
                  <Main>
                    <Align />
                  </Main>
                )}
              />
              <Route
                path="/show-hide"
                render={() => (
                  <Main>
                    <ShowHide />
                  </Main>
                )}
              />
              <Route
                path="/clock"
                render={() => (
                  <Main>
                    <Clock />
                  </Main>
                )}
              />
              <Route
                path="/color-change"
                render={() => (
                  <Main>
                    <ColorChange />
                  </Main>
                )}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}
