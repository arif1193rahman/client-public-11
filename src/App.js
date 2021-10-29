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
import LogIn from './Components/LogIn/LogIn';
import Booking from './Components/Booking/Booking';

function App() {
  return (
    <div className="App">
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
          <Route path="/login">
          <LogIn></LogIn>
          </Route>
          <Route path= "/booking/:placeOrderId">
            <Booking></Booking>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
