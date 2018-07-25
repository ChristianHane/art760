import React, {Component} from 'react';

import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';
import Admin from './Components/Admin/AdminPage';
import ResultsPage from './Components/Results/ResultsPage';
import NoMatch from './Components/NoMatch/NoMatch.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
            <Header></Header>

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/results" component={ResultsPage}/>
                <Route component={NoMatch}></Route>
              </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
