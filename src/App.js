import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Balance from './components/balance/balance';
import Nav from './components/nav/nav';
<<<<<<< HEAD
import Login from './components/login/login';
=======
import BuyorSell from './components/buyorsell/buyorsell';
>>>>>>> buyorsell

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Route path="/balance" component={Balance}></Route>
<<<<<<< HEAD
        <Route exact={true} path='/'>
            <Login />
          </Route>
=======
        <Route path="/buyorsell" component={BuyorSell}></Route>
>>>>>>> buyorsell
      </Router>
    </div>
  );
}

export default App;
