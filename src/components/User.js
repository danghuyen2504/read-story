import React, { Component } from 'react';
import {Container,
        View,
        Text,
        Footer,
        FooterTab,
        Button,
        Icon,
        Content,
        Item
} from 'native-base';
import { ImageBackground, Image, TouchableOpacity } from 'react-native';

export default class User extends Component {
    static navigationOptions = ({navigation}) => ({
        header: (
            <View style = {{height: 23, backgroundColor: '#00a574'}}/>
        )
    });

    render() {
        return (
            <Container>
                <View style = {{flex: 1}}>
                    <ImageBackground    source = {require('../images/anime.jpeg')}
                                        style = {{height: 200, alignSelf: 'stretch'}}>
                    </ImageBackground>
                    <View style = {{alignItems: 'center', marginTop: -40}}>
                        <Image source = {require('../images/avatar.png')}
                                style = {{height: 100, width: 100, borderRadius: 75}}/>
                    </View>

                    <TouchableOpacity style = {{alignItems: 'center', marginTop: 15}}>
                        <Text style = {{padding: 10, borderWidth: 1, borderColor: '#00a574', borderRadius: 25}}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <View style = {{marginTop: 20, marginHorizontal: 15}}>
                        <Item style = {{paddingVertical: 10}}>
                            <Icon name = 'ios-create-outline'/>
                            <Text>Trở thành tác giả</Text>
                        </Item>
                    </View>
                </View>    
            </Container>
        );
    }
}