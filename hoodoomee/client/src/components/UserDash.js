import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to='/search'>
                            <Button success large fullwidth>
                                Search for a Barber
                            </Button>
                        </Link>
                        <br/>
                        <Link to='/favorites'>
                            <Button success large fullwidth>
                                Favorites
                            </Button>
                        </Link>
                    </Section>
                </Section>
            </div>
        )
    }
}

export default UserDash


