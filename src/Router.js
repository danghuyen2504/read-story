import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomePage from './components/HomePage';
import Library from './components/Library';
import User from './components/User';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export const Tabs = TabNavigator(
    {
        HomeScreen: {
            screen: HomePage,
            navigationOptions: {
                header: null,
            }
        },
        LibraryScreen: {
            screen: Library,
            navigationOptions: {
                header: null,
            }
        },
        UserScreen: {
            screen: User,
            navigationOptions: {
                header: null,
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: props => {
            return (
                <Footer>
                    <FooterTab style = {{backgroundColor: '#00a574'}}>
                        <Button vertical transparent
                                // active={props.navigationState.index === 0}
                                onPress={() => props.navigation.navigate('HomeScreen')}>
                            <Icon name = 'ios-home-outline' style = {{color: '#fff'}}/>
                            <Text style = {{color: '#fff'}}>Home</Text>
                        </Button>
                        <Button vertical transparent
                                // active={props.navigationState.index === 1}
                                onPress={() => props.navigation.navigate('LibraryScreen')}>
                            <Icon name = 'ios-book-outline' style = {{color: '#fff'}}/>
                            <Text style = {{color: '#fff'}}>Library</Text>
                        </Button>
                        <Button vertical transparent
                                // active={props.navigationState.index === 2}
                                onPress={() => props.navigation.navigate('UserScreen')}>
                            <Icon name = 'ios-person-outline' style = {{color: '#fff'}}/>
                            <Text style = {{color: '#fff'}}>User</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        },
    }
);