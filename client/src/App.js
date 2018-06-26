import React, {Component} from 'react';

import Header from './Components/Header/Header.js';
import Home from './Components/Home.js';
import Footer from './Components/Footer/Footer.js';
import Admin from './Components/'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header></Header>
            <div>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/admin" component={Admin}/>
              </Switch>
            </div>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
