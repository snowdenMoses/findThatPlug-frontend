import Container from '@mui/material/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from './context/Store';
import './App.css';
import LandingPage from './components/Landing_page';
import AllProducts from './components/AllProducts';
import AllUsers from './components/AllUsers';
import AddVendor from './components/vendors/AddVendor';
import CustomerLogin from './components/CustomerLogin';
import EditVendorDetails from './components/vendors/EditVendorDetails';
import VendorDashboard from './components/vendors/VendorDashboard';
import AddProduct from './components/vendors/AddProduct';
import AuthenticatedComponent from './authorization/AuthenticatedComponent';
import RedirectLogin from './authorization/RedirectLogin';
import VendorLogin from './authentication/VendorLogin';

function App() {
  return (
    <Store>
      <Container fixed>
        <Router>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route path='/all-products'>
              <AllProducts />
            </Route>
            <Route path='/all-users'>
              <AllUsers />
            </Route>
            <Route path='/add-vendor'>
              <AddVendor />
            </Route>
            <Route path='/customer-login'>
              <CustomerLogin />
            </Route>
            <Route path='/vendor-login'>
              <VendorLogin />
            </Route>
            <AuthenticatedComponent>
                <Route path='/vendor-dashboard'>
                  <VendorDashboard />
              </Route>
              <Route path='/edit-vendor-details'>
                <EditVendorDetails />
              </Route>
              <Route path='/add-product'>
                <AddProduct />
              </Route>
            </AuthenticatedComponent>
          </Switch>
        </Router>
      </Container>
    </Store>
  );
}

export default App;
