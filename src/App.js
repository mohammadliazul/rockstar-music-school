import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Classes from "./components/Classes/Classes";
import Teachers from "./components/Teachers/Teachers";
import Contacts from "./components/Contacts/Contacts";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
