/**
 * 展示图书信息,点击item进入图书详情页面
 *外部传入：
 * book图书对象
 * onPress事件处理方法
 * */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


export default class bookItem extends Component {
    render() {
        var book=this.props.book;
        return (
            <TouchableOpacity style={styles.item} {...this.props}>
                {/*图书图像*/}
                <View  style={styles.imageContainer}>
                    <Image  style={styles.image} source={{uri:book.image}}/>
                </View>
                {/*图书信息*/}
                <View  style={styles.contentContainer}>
                    <View  style={styles.textContainer}>
                        <Text numberOfLines={1}>{book.title}</Text>
                    </View>
                    <View  style={styles.textContainer}>
                        <Text  style={styles.publisher_author} numberOfLines={1}>{book.publisher}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.publisher_author} numberOfLines={1}>{book.author}</Text>
                    </View>
                    <View style={{flexDirection:"row",flex:1,alignItems:"center"}}>
                        <Text style={styles.price} >{book.price}</Text>
                        <Text style={styles.pages} >{book.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    item:{
        flex:1,
        marginTop:25,
        backgroundColor:"cyan",
        justifyContent:"center",
        alignItems:"center",
        width:80,
        height:100,
    },
    item:{
        flexDirection:"row",
        height:120,
        padding:10
    },
    imageContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:80,
        height:100,
    },
    contentContainer:{
        flex:1,
        marginLeft:15
    },
    textContainer:{
        flex:1,
        justifyContent:"center"
    },
    publisher_author:{
        color:"#a3a3a3",
        fontSize:13
    },
    price:{
        color:"#2bb2a3",
        fontSize:16
    },
    pages:{
        marginLeft:10,
        color:"#a7a0a0"
    }
})
