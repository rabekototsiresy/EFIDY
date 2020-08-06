import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import PresidentContainer from './components/PresidentContainer';
import Nav from './components/Nav';
import ElecteurContainer from './components/ElecteurContainer';
import ElectionContainer from './components/ElectionContainer';
import Test from './components/Test';

const App = () => {
  return (
    <Router>
      <Route component={Nav} />
      <Switch>
        <Route path="/" exact component={ PresidentContainer } />
        <Route path="/mpifidy" component={ ElecteurContainer } />
        <Route path="/fifidianana" component={ ElectionContainer } />
        <Route path="/test" component={ Test } />
      </Switch>
    </Router>
  )
}

export default App
