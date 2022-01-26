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
import Dashboard from "./pages/Admin/DashBoard/Dashboard";
import AddUser from "./pages/Admin/DashBoard/AddUser/AddUser";
import EditUser from "./pages/Admin/DashBoard/EditUser/EditUser";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Films from "./pages/Admin/Films/Films";
import ShowTime from "./pages/Admin/Showtime/ShowTime";
import AddNewFilms from "./pages/Admin/Films/AddNewFilms/AddNewFilms";
import EditFilms from "./pages/Admin/Films/EditFilms/EditFilms";

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
        <AdminTemplate exact path="/admin" Component={Dashboard} />
        <AdminTemplate exact path="/admin/dashboard/adduser" Component={AddUser} />
        <AdminTemplate exact path="/admin/dashboard/edituser/:id" Component={EditUser} />
        <AdminTemplate exact path="/admin/films" Component={Films} />
        <AdminTemplate exact path="/admin/films/addnewfilms" Component={AddNewFilms} />
        <AdminTemplate exact path="/admin/films/editfilms/:id" Component={EditFilms} />
        <AdminTemplate exact path="/admin/showtime" Component={ShowTime} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
