import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Notification, Button, Section } from 'reactbulma'

function UserDash (props) {
    return (
        <Section>
            <Container fluid>
                <Notification>
                    This container is <strong>fluid</strong>: it will have a 20px gap on either side, on any viewport size.
                </Notification>
            </Container>
            <Section>
                <Button as="a" success large fullwidth>
                    Search for a Barber
                </Button>
                <br/>
                <Button as="a" success large fullwidth>
                    Favorites
                </Button>
            </Section>
        </Section>
    )
}

export default UserDash


