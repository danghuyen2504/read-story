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
        CardItem,
        Segment
} from 'native-base';

export default class Library extends Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <View>
                <View style = {{height: 23, backgroundColor: '#00a574'}}/>
                <Header searchBar rounded hasTabs
                        style = {{backgroundColor: '#00a574'}}>
                    <Item>
                        <Icon name = 'ios-search'/>
                        <Input placeholder = 'Search'/>
                    </Item>
                </Header>
            </View>
        )
    });

    render() {
        return (
            <Container>
                <Segment rounded style = {{backgroundColor: '#00a574', paddingHorizontal: 10}}>
                    <Button first>
                        <Text>Đã xong</Text>
                    </Button>
                    <Button>
                        <Text>Đang đọc</Text>
                    </Button>
                    <Button last>
                        <Text>Tải về</Text>
                    </Button>
                </Segment>
                <Content padder>
                    <Text>Library</Text>
                </Content>
            </Container>
        );
    }
}