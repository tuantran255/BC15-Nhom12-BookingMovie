import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import { LoginTemplate } from "./templates/LoginTemplate/LoginTemplate";
import Register from "./pages/Register/Register";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/detail/:id" Component={Detail} />
        <LoginTemplate exact path="/login" Component={Login} />
        <LoginTemplate exact path="/register" Component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
