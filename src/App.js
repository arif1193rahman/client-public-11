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
import AddEvents from "./Components/AddEvents/AddEvents";
import LogIn from "./Components/LogIn/LogIn";
import OrderDetails from "./Components/MyOrder/OrderDetails/OrderDetails";
import NotFound from "./Components/NotFound/NotFound";

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
            <Route path="/home">
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
