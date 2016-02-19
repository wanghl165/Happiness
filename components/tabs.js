'use strict';

var React = require('react-native');




var {
    StyleSheet,
    Text,
    View,
    } = React;
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';
const glypy = glypyMapMaker({
    Home: 'e900',
    Camera: 'e901',
    Stat: 'e902',
    Settings: 'e903',
    Favorite: 'e904'
});



var tabsBar = React.createClass({
    getInitialState() {
        return {
            selectedTab: 'homeTab',
        };
    },

    render:function(){
        return (
                <Tabbar ref="myTabbar" barColor={'gray'}>
                    <Tab name="home">
                        <IconWithBar label="Home" type={glypy.Home} from={'icomoon'}/>
                        <RawContent>
                            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                                <Text onPress={()=>this.tabbarToggle()}>Toggle Tabbar</Text>
                            </View>
                        </RawContent>
                    </Tab>
                    <Tab name="camera">
                        <IconWithBar label="Camera" type={glypy.Camera} from={'icomoon'}/>
                        <RawContent>
                            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                                <Text onPress={()=>console.log('camera')}>Camera</Text>
                            </View>
                        </RawContent>
                    </Tab>
                    <Tab name="stats">
                        <IconWithBar label="Stats" type={glypy.Stat} from={'icomoon'}/>
                        <RawContent>
                            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                                <Text onPress={()=>console.log('stats')}>Stats</Text>
                            </View>
                        </RawContent>
                    </Tab>
                    <Tab name="favorite">
                        <IconWithBar label="Fav" type={glypy.Favorite} from={'icomoon'}/>
                        <RawContent>
                            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                                <Text onPress={()=>console.log('favorite')}>Favorite</Text>
                            </View>
                        </RawContent>
                    </Tab>
                    <Tab name="settings">
                        <IconWithBar label="Settings" type={glypy.Settings} from={'icomoon'}/>
                        <RawContent>
                            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                                <Text onPress={()=>console.log('settings')}>Settings</Text>
                            </View>
                        </RawContent>
                    </Tab>
                </Tabbar>
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

module.exports = tabsBar;
