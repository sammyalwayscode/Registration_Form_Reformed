import React from 'react'
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Forminput from './Components/Forminput/Forminput'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Thanks from './Components/ThankPage/Thanks';

function App() {
  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/register" exact component={Forminput} />
          <Route path="/thanks" exact component={Thanks} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
