/**
 * 封装 头部
 *外部传入：
 * navigator 点击返回按钮返回上一层页面
 * initObj（backName,barTitle） 返回按钮的名称/标题
 * */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Icon from './left_icon';

export default class Header extends Component {
    render() {
        //获取obj对象，包括按钮名称和title
        var headerContent=this.props.initObj;
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.left_btn} onPress={this._pop.bind(this)}>
                    <Icon />
                    <Text style={styles.btn_text}>{headerContent.backName}</Text>
                </TouchableOpacity>
                <View style={styles.title_container}>
                    <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
                </View>
            </View>
        );
    }
    _pop(){
        this.props.navigator.pop();
    }
}

var styles = StyleSheet.create({
    container:{
        width:15,
        height:15,
        borderLeftWidth:2,
        borderBottomWidth:2,
        borderColor:"#fff",
        marginLeft:10,
        transform:[{rotate:"45deg"}]//将一个矩形框旋转45度
    },
    header:{
        height:44,
        backgroundColor:"#3497ff",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },

    left_btn:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    btn_text:{
        color:"#fff",
        fontSize:17,
        fontWeight:"bold"
    },
    title_container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold",
        marginTop:5,
        marginLeft:-50,
        textAlign:"center"
    }
})
