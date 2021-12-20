import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Detail from "./pages/Detail/Detail";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" Component={Home} />
        <HomeTemplate path="/detail/:id" Component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
