import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import { useStateValue } from './Context/StateProvider';
import { auth } from './firebase';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Payment from './Pages/Payment/Payment';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log("The User is >>>", authUser);

      if(authUser) {

        // user is Logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        // User is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) 

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;