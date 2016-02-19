'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    ActivityIndicatorIOS,
    Image,
    } = React;

var Person = React.createClass({
    render: function() {
        var person = this.props.person.user;
        return (
            <View style={ styles.person }>
                <Image style={ styles.personImage } source={{ uri: person.picture.thumbnail }} />
                <View style={ styles.personInfo }>
                    <Text style={ styles.personName }>
                        { person.name.first } { person.name.last }
                    </Text>
                </View>
            </View>
        )
    }
});

var facemashTab = React.createClass({
    getInitialState: function() {
        return {
            list: [],
            currentIndex: 0
        };
    },
    componentWillMount: function() {
        fetch('https://randomuser.me/api/?results=2&gender=female')
            .then(res => res.json())
            .then(res => this.setState({ list: res.results }));
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
            var people = this.state.list.map(person => <Person person={ person } />);
            contents = (
                <View style={ styles.content }>
                    { people }
                </View>
            )
        }
        return (
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <Text style={ styles.headerText }>FaceMash</Text>
                </View>
                { contents }
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
    person: {
        flex: 1,
        margin: 10,
        borderRadius: 3,
        overflow: 'hidden'
    },
    personInfo: {
        borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
        borderLeftWidth: 1,
        borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
        borderRightWidth: 1,
        borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
        borderBottomWidth: 1,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    personImage: {
        flex: 1,
        height: 200
    },
    personName: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 5
    },
    personScore: {
        flex: 0.25,
        alignItems: 'center'
    },
    personScoreHeader: {
        color: 'rgba( 0, 0, 0, 0.3 )',
        fontSize: 10,
        fontWeight: 'bold'
    },
    personScoreValue: {
        color: 'rgba( 0, 0, 0, 0.6 )',
        fontSize: 16
    },
    won: {
        color: '#93C26D'
    },
    lost: {
        color: '#DD4B39'
    }
});

module.exports = facemashTab;
