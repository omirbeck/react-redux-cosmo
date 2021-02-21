import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import PeoplePage from "./components/Pages/PeoplePage";
import StarshipsPage from "./components/Pages/StarshipsPage";
import PlanetsPage from "./components/Pages/PlanetsPage";

let myStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

// store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={myStore}>
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={PeoplePage}/>
        <Route path="/people" component={PeoplePage} />
        <Route path="/planets" component={PlanetsPage} />
        <Route path="/starships" component={StarshipsPage} />
      </Switch>
    </App>
  </Router>
  </Provider>,
  document.getElementById("root")
);
