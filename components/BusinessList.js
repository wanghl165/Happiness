'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicatorIOS,
    //NavigatorIOS,
    Navigator,
    ScrollView,
    TouchableHighlight
    } = React;

var BusinessView = require('./BusinessView');
var Business = React.createClass({
    openUser: function (uid){
        this.props.navigator.push({
            component: BusinessView,
            uid: { uid }
        });
    },

    render: function() {
        var user = this.props.user;
        return (
            <TouchableHighlight onPress={ ()=>this.openUser(user.uid) } style={ styles.user }>
                <View >
                    <Image
                        style={ styles.userImage }
                        source={ { uri: user.picture } }
                    />
                    <View style={ styles.userInfo }>
                        <Text style={ styles.userrName }>
                            { user.name }
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
});

var BusinessList = React.createClass({
    getInitialState: function() {
        return {
            list: [],
        };
    },
    componentWillMount: function(){
        console.log(this.props);
        var type = this.props.business.type;
        fetch('http://43.227.252.137/lucky/json/user/business/'+type)
            .then(res => res.json())
            .then(res => this.setState({ list: res.users }));
    },

    render: function() {
        var contents;
        if (!this.state.list.length) {
            contents = (
                <View style={ styles.loading }>
                    <Text style={ styles.loadingText }>Loading</Text>
                    <ActivityIndicatorIOS />
                </View>
            )
        } else {
            var navigator = this.props.navigator;
            //var productView = this.state.list.map(product => <Product product={ product } key={key}/>);
            var businessTeaser = this.state.list.map(function(user, key) {
                return <Business user={user} key={key} navigator={navigator}/>;
            });
            contents = (
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    showsHorizontalScrollIndicator={true}
                    style={ [styles.scrollView] }
                >
                    <View style={styles.userList}>
                        { businessTeaser }
                    </View>
                </ScrollView>
            )
        }
        return (
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <Text style={ styles.headerText }>Products</Text>
                </View>
                <View>
                    { contents }
                </View>
            </View>
        );
    }
});

//var ProductList = React.createClass({
//    render:function(){
//        return (
//            <NavigatorIOS
//                style={ styles.container }
//                initialRoute={{ title: '幸福管家', component: listProduct }}
//            />
//        )
//    }
//
//});

var styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#fff',
    },
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        fontSize: 14,
        marginBottom: 20
    },
    header: {
        height: 50,
        backgroundColor: '#760004',
        paddingTop: 20,
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    userList: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        flexWrap: 'wrap',
        //justifyContent: 'center',
        //height: 2000
        paddingBottom: 50
    },
    user: {
        //flex: 1,
        width: 170,
        height: 190,
        margin: 5,
        //overflow: 'hidden'
    },

    userImage: {
        //flex: 1,
        height: 170,
        width: 170
    },
    userName: {
        fontSize: 14,
        fontWeight: "500"
    },

    scrollView: {
        //backgroundColor: '#6A85B1',
        height: 580,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 0
    },

    contentContainer: {
        paddingVertical: 20
    }
});
//AppRegistry.registerComponent('ProductList', () => ProductList);

module.exports = BusinessList;