import React from 'react'
import { Link } from 'react-router-dom'
import { Hero, Container, Title, Tabs, Notification, Button } from 'reactbulma'


function Navigation (props) {
    return (
        <div>
            <Hero medium dark bold>
                <Hero.Body>
                    <Container>
                        <Title>
                            HooDooMee
                        </Title>
                    </Container>
                </Hero.Body>
                <Hero.Foot>
                    <Tabs>
                        <Container>
                            <ul>
                                <Link to='/'>
                                    <li className="active">Home</li>
                                </Link>
                                <Link to='/search'>
                                    <li>Search</li>
                                </Link>
                                <Link to='/bookings'>
                                    <li>Bookings</li>
                                </Link>
                                <Link to='/favorties'>
                                    <li>Favorites</li>
                                </Link>
                                <Link to='/settings'>
                                    <li>Settings</li>
                                </Link>
                            </ul>
                        </Container>
                    </Tabs>
                </Hero.Foot>
            </Hero>
            <Container fluid>
                <Notification>
                    This container is <strong>fluid</strong>: it will have a 20px gap on either side, on any viewport size.
                </Notification>
            </Container>
            <div>
                <Button as="a" success large fullwidth>
                    Search for a Barber
                </Button>
                <br/>
                <Button as="a" success large fullwidth>
                    Favorites
                </Button>
            </div>
        </div>
    )
}



export default Navigation




//         <nav>
//             <ul>
//                 <Link to='/'>
//                     <li>Home</li>
//                 </Link>
//                 <Link to='/search'>
//                     <li>Search</li>
//                 </Link>
//                 <Link to='/bookings'>
//                     <li>Bookings</li>
//                 </Link>
//                 <Link to='/favorties'>
//                     <li>Favorites</li>
//                 </Link>
//                 <Link to='/settings'>
//                     <li>Settings</li>
//                 </Link>
//             </ul>
//         </nav>
