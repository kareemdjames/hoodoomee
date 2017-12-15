import React from 'react'
import { Link } from 'react-router-dom'
import { Hero, Container, Title, Tabs } from 'reactbulma'


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
