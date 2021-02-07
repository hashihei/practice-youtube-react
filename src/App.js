import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Top from './pages/Top'
import Search from './pages/Search'
import Plandetail from './pages/Plandetail'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/detail" component={Plandetail} />
      </Switch> 
    </Router>
  );
}

export default App;
