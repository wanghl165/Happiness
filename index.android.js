/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Navigator,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

//var GiftedMessengerExample = require('./GiftedMessengerExample');
var HomeTab = require('./tabs/Home');
var ProductList = require('./components/ProductList');
var ProductView = require('./components/ProductView');
var BusinessList = require('./components/BusinessList');

var NavigationBarRouteMapper = {

    _onPress: function(){
        console.log(this);
        //navigator.push({title:'Product List',component:'BusinessList',business:{type}})

    },

    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            return (
                <View style={styles.navBarLeft}><Text>Left</Text></View>
            );
        }

        return (
            <View style={styles.navBarLeft}>
                <TouchableOpacity
                    onPress={() => navigator.pop()}
                    style={styles.navBarLeftButton}>
                    <Image source={require('./images/icons/icons_arrow_left.png')} style={styles.navBarLeftIcons}/>
                </TouchableOpacity>
            </View>
        );
    },

    RightButton: function(route, navigator, index, navState) {
        return (<View style={styles.navBarRight}><Text>Right</Text></View>);
        //return (
        //    <TouchableOpacity
        //        onPress={() => navigator.push(newRandomRoute())}
        //        style={styles.navBarRightButton}>
        //        <Text style={[styles.navBarText, styles.navBarButtonText]}>
        //            Next
        //        </Text>
        //    </TouchableOpacity>
        //);
    },

    Title: function(route, navigator, index, navState) {
        //console.log(route);
        //<Image source={require('./images/home_title.png')}/>
        if(index == 0) {
            return (
                <View style={styles.navBarMiddle}>
                    <Text style={styles.navBarText}>{route.title}</Text>
                </View>
            );
        } else if(route.title == 'Product List') {
            var type = route.type ? route.type.type : route.business.type;
            return (
                <View style={styles.listHeader}>
                    <View style={styles.listHeaderItem}>
                        <Text
                            style={styles.listHeaderItemText}
                            onPress={()=>{navigator.push({title:'Product List',component:'ProductList',type:{type}})}}>
                            项目
                        </Text>
                    </View>
                    <View style={styles.listHeaderItem}>
                        <TouchableOpacity
                            onPress={()=>{route.title != 'Business List' ? navigator.push({title:'Business List',component:'BusinessList',business:{type}}) : ''}}
                            style={styles.navBarLeftButton}>
                            <Text style={styles.listHeaderItemText}>
                                商家
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        //return (
        //    <Text style={[styles.navBarText, styles.navBarTitleText]}>
        //        {route.title} [{index}]
        //    </Text>
        //);
    },

};
//class LuckyApp extends Component {
var LuckyApp = React.createClass ({
    getInitialState() {
        return {
            selectedTab: 'homeTab',
        };
    },
    renderScene: function(route, nav) {
        if(route.business) {
            return (<BusinessList navigator={nav} business={route.business}/>);
        } else if(route.nid) {
            return (<ProductView navigator={nav} nid={route.nid}/>);
        } else if(route.type) {
            return (<ProductList navigator={nav} type={route.type}/>);
        } else {
            return (<HomeTab navigator={nav}/>);
        }
    },

    render() {
        return (
            <Navigator
                initialRoute={{title:'幸福管家', message: 'home'}}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                       routeMapper={NavigationBarRouteMapper}
                       style={styles.navBar}
                    />
                }
            />
        );
    }
})

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        //display: 'flex',
        //flex: 1,
        //backgroundColor: '#ff9696',
        //justifyContent: 'center',
        //height: 50,
    },
    navBarLeft: {
        //flex:1,
        width: 50,
        borderWidth: 1,
        borderColor: '#fff',
    },
    navBarRight: {
        //flex:1,
        width: 50
    },
    navBarMiddle: {
        //alignItems: 'center',
        flex:1,
        //width: 200,
        //justifyContent: 'center'
        borderWidth: 1,
        borderColor: '#fff',
    },

    navBarText: {
        fontSize: 16,
        marginVertical: 10,
        color: '#fff',
        textAlign:'center',
    },
    navBarTitleText: {
        color: '#fff',
        fontWeight: '500',
        //marginVertical: 9,
    },
    navBarLeftButton: {
        //paddingLeft: 10,
        width: 80
    },
    navBarRightButton: {
        //paddingRight: 10,
    },
    navBarLeftIcons: {
        width: 10,
        height: 20,
        marginVertical: 15,
        marginLeft: 15,
    },
    homeTitleImage: {
        marginVertical: 9,
        justifyContent: 'center'
    },
    listHeader: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 10
    },
    listHeaderItem: {
        flex:1,
        backgroundColor: '#fff',
        padding: 5,
        width: 80,
        height: 30,
        borderRadius: 4,
        margin: 5,
        justifyContent: 'center',
    },
    listHeaderItemText: {
        color: '#ff9696',
        fontSize: 16,
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('LuckyApp', () => LuckyApp);
