import React, { Component } from 'react';
import {Container,
        View,
        Text,
        Footer,
        FooterTab,
        Button,
        Icon,
        Content
} from 'native-base';

export default class User extends Component {
    render() {
        return (
            <Container>
                <View style = {{height: 23, backgroundColor: '#00a574'}}/>
                <Content padder>
                    <Text>User</Text>
                </Content>
            </Container>
        );
    }
}