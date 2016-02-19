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
    View
} from 'react-native';

//var GiftedMessengerExample = require('./GiftedMessengerExample');
var HomeTab = require('./tabs/Home');

//class LuckyApp extends Component {
var LuckyApp = React.createClass ({
    getInitialState() {
        return {
            selectedTab: 'homeTab',
        };
    },

    render() {

        return (
            <Navigator
                initialRoute={{name: 'My First Scene', index: 0}}
                renderScene={(route, navigator) =>
                <HomeTab
                    name={route.name}
                    onForward={() => {
                        var nextIndex = route.index + 1;
                        navigator.push({
                            name: 'Scene ' + nextIndex,
                            index: nextIndex,
                        });
                    }}
                    onBack={() => {
                        if (route.index > 0) {
                        navigator.pop();
                    }
                }}
              />
            }
            />
        );
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LuckyApp', () => LuckyApp);
