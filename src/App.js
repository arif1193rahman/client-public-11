import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import OurServices from './Components/OurServices/OurServices';
import Header from './Components/Header/Header';
import Booking from './Components/Booking/Booking';
import AuthProvider from './Context/AuthProvider';
import SignIn from './Components/LogIn/SignIn/SignIn';
import PrivateRoute from './Components/LogIn/PrivateRoute/PrivateRoute';

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
          <SignIn></SignIn>
          </Route>
          <PrivateRoute path= "/booking/:placeOrderId">
            <Booking></Booking>
          </PrivateRoute>

        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
