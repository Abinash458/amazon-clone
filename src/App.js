import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;