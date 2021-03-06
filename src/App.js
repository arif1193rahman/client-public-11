import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import OurServices from "./Components/OurServices/OurServices";
import Header from "./Components/Header/Header";
import Booking from "./Components/Booking/Booking";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/LogIn/PrivateRoute/PrivateRoute";
import Footer from "./Components/Footer/Footer";
import LogIn from "./Components/LogIn/LogIn";
import OrderDetails from "./Components/MyOrder/OrderDetails/OrderDetails";
import NotFound from "./Components/NotFound/NotFound";
import MyOrders from "./Components/MyOrder/MyOrders";
import ManageAllOrders from "./Components/ManageAllOrders/ManageAllOrders";
import AddAllServices from "./Components/AddAllServices/AddAllServices";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/ourServices">
              <OurServices></OurServices>
            </Route>

            <Route path="/signIn">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/orderDetails">
              <OrderDetails></OrderDetails>
            </PrivateRoute>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/manageOrder">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route exact path="/addNewService">
              <AddAllServices></AddAllServices>
            </Route>

            <PrivateRoute exact path="/booking/:placeOrderId">
              <Booking></Booking>
            </PrivateRoute>
              
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
