import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
