import React, {Component} from 'react';

import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer/Footer.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header></Header>

              <Switch>
                <Route exact path="/" component={Home}/>
              </Switch>


          <Footer></Footer>
        </div>
      </Router>


    );
  }
}

export default App;
