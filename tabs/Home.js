'use strict';

var React = require('react-native');




var {
    StyleSheet,
    Text,
    View,
    ActivityIndicatorIOS,
    Image,
    TabBarIOS,
    Navigator,
    NavigatorIOS,
    TouchableHighlight,
    //StatusBarIOS
    } = React;

//var MessagesTab = require('./Messages');
//var SettingsTab = require('./Settings');
//var OrdersTab = require('./Orders');

//var Home = require('./Home');
var TypeList = require('../components/TypeList');

var homeTab = React.createClass({
    getInitialState() {
        return {
            selectedTab: 'homeTab',
        };
    },

    render:function(){
        return (
            <TypeList navigator={this.props.navigator}/>
        )
    }
});
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {
        height: 50,
        backgroundColor: '#760004',
        paddingTop: 20,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    view: {
        color:'#fff',
    },
    carousel: {
        //width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,

    },
    loadingText: {
        fontSize: 14,
        marginBottom: 20
    },
    bannerImage: {
        flex: 1,
        height: 200,
        width: 414
    },
    bannerText: {
        fontSize: 24,
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ECECEC',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    homeBlock: {
        //flex: 1,
        backgroundColor: '#e88787',
        padding: 30,
        width: 150,
        height: 80,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
    },
    homeBlockSmall: {
        width: 100,
    },
    homeBlockText: {
        color: '#fff',
        fontSize: 20
    },


});

module.exports = homeTab;
