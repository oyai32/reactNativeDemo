/**
 * 图书列表模块
 * */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView,
    ScrollView,
} from 'react-native';

import Util from './../common/util';
import SearchBar from './../common/searchBar';
import ServiceURL from './../common/service';
import BookItem from './book_item';
import BookDetail from './book_detail';


export default class BookList extends Component {
    constructor(props){
        super(props);
        var ds=new ListView.DataSource({
            rowHasChanged:(oldRow,newRow) => oldRow!==newRow
        })
        this._changeText=this._changeText.bind(this);
        this._renderRow=this._renderRow.bind(this);//此行一定要，否则renderRow方法里的this指向不对
        this.state = {
            show: false,
            dataSource:ds,
            keywords:"react"
        }
    }
    getData(){
        //开启loading，每次搜索都需要重新下载显示数据
        this.setState({
            show:false,
        })
        var that=this;
        var url = ServiceURL.book_search + "?count=20&q=" + this.state.keywords;
        Util.getRequest(url,
            function (data) {
                //成功回调
                if (!data.books || data.books.length == 0) {
                    return alert("未查询到相关书籍")
                }
                var ds = new ListView.DataSource({
                    rowHasChanged: (oldRow, newRow) => oldRow !== newRow
                })
                that.setState({//state发生变化就会重新渲染，执行render
                    show: true,
                    dataSource: ds.cloneWithRows(data.books)
                })
            }, function (error) {
                //失败回调
                alert(error)
            })
    }
    _changeText(text){
        this.setState({keywords:text})
    }
    _searchPress(){
        this.getData();
    }
    _showDetail(bookID){
        var detailRoute={
            component:BookDetail,
            passProps:{
                bookID:bookID
            }
        }
        this.props.navigator.push(detailRoute)
    }
    render() {
        return(
            <ScrollView>
                <SearchBar
                    placeholder="请输入图书的名称"
                    onPress={this._searchPress.bind(this)}
                    onChangeText={this._changeText}
                />
                {
                    this.state.show?
                        <ListView
                            dataSource={this.state.dataSource}
                            initialListSize={10}
                            renderRow={this._renderRow}
                            renderSeparator={this._renderSeparator}
                        />
                        :Util.loading
                }
            </ScrollView>
        )
    }

    //组件挂载完成
    componentDidMount(){
        //组件挂载完成后加载数据
       this.getData();
    }
    _renderRow(book){
        return <BookItem book={book}   onPress={this._showDetail.bind(this,book.id)}/>
    }
    //渲染分割线
    _renderSeparator(sectionID,rowID){
        var style={
            height:1,
            backgroundColor:"#ccc"
        }
        return(
            <View style={style} key={sectionID+rowID}></View>
        )
    }
}
