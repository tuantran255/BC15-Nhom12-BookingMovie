import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import ListMovie from "./pages/ListMovie/ListMovie";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/listmovie" Component={ListMovie} />
      </Switch>
    </Router>
  );
}

export default App;
