import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './components/Store';
import './App.css';
import LandingPage from './components/Landing_page';
import AllProducts from './components/AllProducts';
import AllUsers from './components/AllUsers';
import Login from './components/Login';
import AddUser from './components/AddUser';

function App() {
  return (
    <Store>
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
            <Route path='/all-users'>
              <AllUsers />
            </Route>
            <Route path='/add-user'>
              <AddUser />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Store>
  );
}

export default App;
