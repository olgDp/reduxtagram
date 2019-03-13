import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Main from "./Main";
import Single from "./Single";
import PhotoGrid from "./PhotoGrid";

import store from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={Main} />
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
