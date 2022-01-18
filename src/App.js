import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import { LoginTemplate } from "./templates/LoginTemplate/LoginTemplate";
import Register from "./pages/Register/Register";
import { PurchaseTemplate } from "./templates/PurchaseTemplate/PurchaseTemplate";
import Purchase from "./pages/Purchase/Purchase";
import HistoryBill from "./pages/Purchase/HistoryBill";
import Loading from "./components/Loading/Loading";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Loading />
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/detail/:id" Component={Detail} />
        <LoginTemplate exact path="/login" Component={Login} />
        <LoginTemplate exact path="/register" Component={Register} />
        <PurchaseTemplate exact path="/purchase/:id" Component={Purchase} />
        <PurchaseTemplate exact path="/historybill" Component={HistoryBill} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
