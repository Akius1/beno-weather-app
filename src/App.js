import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/weather-icons.min.css";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";
import { weatherService } from "./store/service";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import PageThree from "./Pages/PageThree";

class App extends Component {
  state = {
    countriesCapital: [],
  };
  fetchData = async () => {
    let capitals = await weatherService.capitals();
    return capitals;
  };
  componentDidMount() {
    this.fetchData().then((ans) => {
      this.setState({ countriesCapital: ans.data.data });
    });
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Route exact path="/" component={PageOne} />
            <Route
              exact
              path="/capital"
              render={(props) => <PageTwo {...props} capitals={this.state} />}
            />
            <Route exact path={"/pagethree"} component={PageThree} />
          </PersistGate>
        </Provider>
      </Router>
    );
  }
}

export default App;
