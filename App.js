/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import BookList from './views/book/book_list';
import Navigation from './views/common/navigation';
import MovieList from './views/movie/movie_list';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
            tab:"book"
        }
    }
  render() {
    return (
        <TabNavigator
            tabBarStyle={{height: 50}}
            style={{flex: 1}}>
            <TabNavigator.Item
                title="book"
                selected={this.state.tab == 'book'}
                onPress={() => this.setState({tab: 'book'})}
                renderIcon={() => <Image
                    style={{width: 40, height: 30}}
                    resizeMode="contain"
                    source={require('./src/img/book.png')}></Image>}
            >
                <Navigation component={BookList}/>
            </TabNavigator.Item>
            <TabNavigator.Item
                title="movie"
                selected={this.state.tab == 'movie'}
                onPress={() => this.setState({tab: 'movie'})}
                renderIcon={() => <Image
                    style={{width: 40, height: 25}}
                    resizeMode="contain"
                    source={require('./src/img/movie.png')}></Image>}
            >
                <Navigation component={MovieList}/>

            </TabNavigator.Item>
        </TabNavigator>

    );
  }
}
