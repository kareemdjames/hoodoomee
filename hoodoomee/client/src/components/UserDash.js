import React, { Component } from 'react'
import Map from './Map'
import Navigation from './Nav'
import { Container, Button, Section } from 'reactbulma'

class UserDash extends Component {

    constructor() {
        super()
        this.state = {
            map: null
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <Section style={{paddingTop:20}}>
                    <Container fluid style={{height: 300}}>
                        <Map
                            onMapReady={map => {
                                if (this.state.map == null)
                                    return
                                this.setState({map})
                            }}
                            zoom={14}
                            center={{lat: 40.7224017, lng: -73.9896719}}
                            containerElement={<div style={{height: 100 + '%'}}/>}
                            mapElement={<div style={{height: 100 + '%'}}/>}
                        />﻿
                    </Container>
                    <Section small>
                        <Button as="a" success large fullwidth>
                            Search for a Barber
                        </Button>
                        <br/>
                        <Button as="a" success large fullwidth>
                            Favorites
                        </Button>
                    </Section>
                </Section>
            </div>
        )
    }
}

export default UserDash


