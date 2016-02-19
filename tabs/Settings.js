'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    Image
    } = React;

var settingsTab = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <View style={ styles.header }>
                    <Text style={ styles.headerText }>FaceMash</Text>
                </View>
                <Text>Settings!</Text>
            </View>
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
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
});

module.exports = settingsTab;