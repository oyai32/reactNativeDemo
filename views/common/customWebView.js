/**
 * 封装 webView,根据传入的url展示网页信息
 *
 *外部传入：
 * 给Header 设置：navigator、initObj(backName、title)
 * 给webView设置source
 * */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import Header from './header';

export default class CustomWebView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    navigator={this.props.navigator}
                    initObj={{
                        backName:this.props.backName,
                        barTitle:this.props.title
                    }}
                />
                <WebView
                    startInLoadingState={true}
                    contentInset={{top:-144,bottom:-220}}
                    source={{uri:this.props.url}}
                />
            </View>
        );
    }
    _pop(){
        this.props.navigator.pop();
    }
}

var styles = StyleSheet.create({
    container:{
       backgroundColor:"#FFF",
        flex:1
    }
})
