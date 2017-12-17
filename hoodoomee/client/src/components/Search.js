import React from 'react'
import Navigation from './Nav'
import { Card, Content, Section } from 'reactbulma'

function Search(props) {

    return(
        <div>
            <Navigation />
            <Section style={{paddingTop:20}}>
                <Card>
                    <Card.Image src='http://bulma.io/images/placeholders/1280x960.png' square='2by1' />
                    <Card.Content>
                        <Content>
                            <ul>
                                <li>Name: Super Cuts</li>
                                <li>Rating: 5</li>
                                <li>Address: 10 Main St. Bronx, NY 10466</li>
                                <li>Distance: 5mi</li>
                            </ul>
                        </Content>
                    </Card.Content>
                </Card>
                <br/>
                <Card>
                    <Card.Image src='http://bulma.io/images/placeholders/1280x960.png' square='2by1' />
                    <Card.Content>
                        <Content>
                            <ul>
                                <li>Name: Super Cuts</li>
                                <li>Rating: 5</li>
                                <li>Address: 10 Main St. Bronx, NY 10466</li>
                                <li>Distance: 5mi</li>
                            </ul>
                        </Content>
                    </Card.Content>
                </Card>

            </Section>
        </div>
    )
}

export default Search