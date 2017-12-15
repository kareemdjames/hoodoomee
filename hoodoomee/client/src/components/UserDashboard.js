import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Notification, Button } from 'reactbulma'

function UserDash (props) {
    return (
        <div>
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

export default UserDash


