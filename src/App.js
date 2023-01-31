import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/Landing_page';
import AllProducts from './components/AllProducts';
import Login from './components/Login';

function App() {
  return (

    <Container>
      <Router> 
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/all-products'>
            <AllProducts />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
        
      </Router>
    </Container>
  );
}

export default App;
