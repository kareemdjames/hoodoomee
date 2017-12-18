import React, { Component } from 'react';
import { Section, Container, Content, Title, SubTitle, Button } from 'reactbulma'

class Home extends Component {

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                <Section>
                    <Container hasTextCentered>
                        <Content>
                            <Title is='1'>HooDooMee</Title>
                            <br/>
                            <br/>
                            <SubTitle>Find and book a barber today</SubTitle>
                        </Content>
                    </Container>
                </Section>
                <Section>
                    <Container hasTextCentered>
                        {
                            !isAuthenticated() && (
                                <Button black onClick={this.login.bind(this)}>Log In</Button>

                            )
                        }
                        {
                            isAuthenticated() && (
                                <Button black onClick={this.logout.bind(this)}>Log Out</Button>
                            )
                        }
                        <Button black onClick={this.goTo.bind(this, 'userdash')}>UserDash</Button>
                    </Container>
                </Section>
                <Section>
                    <Container hasTextCentered>
                        {
                            isAuthenticated() && (
                                <h4>
                                    You are logged in!
                                </h4>
                            )
                        }
                        {
                            !isAuthenticated() && (
                                <h4>
                                    You are not logged in! Please Log in to continue.
                                </h4>
                            )
                        }
                    </Container>
                </Section>
            </div>
        )
    }
}

export default Home