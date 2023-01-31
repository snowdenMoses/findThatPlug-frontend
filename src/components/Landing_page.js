import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const extra = (
    <div className='extra'>
        <Button inverted color='blue'>
            <Link to='/all-products'><p>Explore</p></Link>
        </Button>
        <Button color='twitter'>
            <Link to='/login'><p>Log In</p></Link>
        </Button>
    </div>
)
const LandingPage = () => (
    <>
    <div className='landing_page_container'>
            <Card
                image='/assets/images/elliot.jpg'
                header='Welcome'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra={extra}
            />
    </div>
    </>
)
export default LandingPage