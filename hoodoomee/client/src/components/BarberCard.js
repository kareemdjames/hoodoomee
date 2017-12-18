import React from 'react'
import { Section, Media, Image, Content, Level, Button, Nav } from 'reactbulma'

function BarberCard() {

    return (
        <Section>
            <Media>
                <Media.Left>
                    <Image is='64x64' src='http://bulma.io/images/placeholders/128x128.png' />
                </Media.Left>
                <Media.Content>
                    <Content>
                        <p>
                            <strong>Barber Name</strong>
                        </p>
                    <Level mobile>
                        <Level.Left>
                            <Level.Item>
                                <Button info small>Profile</Button>
                            </Level.Item>
                        </Level.Left>
                    </Level>
                    </Content>
                </Media.Content>
            </Media>
        </Section>
    )
}

export default BarberCard