import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';

const extra = (
    <div className='extra'>
        <Button inverted color='blue'>
            Explore
        </Button>
        <Button color='twitter'>
            Log In
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