import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Page1 from "././components/auth/Page1";
import Page2 from "././components/auth/Page2";
import StartPage from "./components/auth/StartPage";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" id="app-inner">
            <Route exact path="/Page1 " component={Page1} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/" component={StartPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
