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
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
        
      </Router>
    </Container>
  );
}

export default App;
