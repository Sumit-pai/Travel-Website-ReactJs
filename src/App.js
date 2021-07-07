import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/sign-up" component={Signup}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
