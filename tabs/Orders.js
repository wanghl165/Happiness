'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActivityIndicatorIOS,
    Image,
    TabBarIOS,
    StatusBarIOS
    } = React;

var OrdersTab = React.createClass({
    render: function () {
        return (
            <View>
                <Text>Orders here</Text>
            </View>
        )
    }
})

module.exports = OrdersTab;