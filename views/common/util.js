import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,//用于获取设备屏幕的宽高
    ActivityIndicator
} from 'react-native';

var Util={
    windowSize:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
    },
    getRequest:function(url,successCallback,failCallback){
        fetch(url)
            .then(respose =>{
                return respose.json()
            })
            .then(responseData =>{
                successCallback(responseData)
            })
            .catch(error =>{
                failCallback(error)
            })
    },
    loading:<ActivityIndicator style={{marginTop:200}}/>
}
module.exports=Util;
