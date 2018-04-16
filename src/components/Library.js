import React, { Component } from 'react';
import {Container,
        Header,
        Content,
        View,
        Text,
        Item, 
        Icon,
        Input,
        Footer,
        FooterTab,
        Button,
        Card,
        CardItem
} from 'native-base';

export default class Library extends Component {
    render() {
        return (
            <Container>
                <View style = {{height: 23, backgroundColor: '#00a574'}}/>
                <Header searchBar rounded
                        style = {{backgroundColor: '#00a574'}}>
                    <Item>
                        <Icon name = 'ios-search'/>
                        <Input placeholder = 'Search'/>
                    </Item>
                </Header>
                <Content padder>
                    <Text>Library</Text>
                </Content>
            </Container>
        );
    }
}