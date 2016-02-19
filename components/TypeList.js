'use strict';
var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActivityIndicatorIOS,
    Image,
    Navigator,
    TouchableHighlight,
    PixelRatio,
    } = React;

var ProductList = require('../components/ProductList');
var Dimensions = require('Dimensions');

var Carousel = require('react-native-carousel');
var RNCarousel = React.createClass({
    getInitialState: function() {
        return {
            list: [],
            currentIndex: 0
        };
    },
    componentWillMount: function() {
        //fetch('http://192.168.1.9/drupal741/json/banner')
        fetch('http://43.227.252.137/lucky/json/banner')
            .then(res => res.json())
            .then(res => this.setState({ list: res.banners }));
    },
    render() {
        var contents;
        if (!this.state.list.length) {
            contents = (
                <View style={ styles.loading }>
                    <Text style={ styles.loadingText }>Loading</Text>
                    <ActivityIndicatorIOS />
                </View>
            )
        } else {
            var bannerView = this.state.list.map(function(banner, i){
                return (
                    <View style={styles.carousel} key={i}>
                        <Image
                            style={styles.bannerImage}
                            source={{ uri: banner.field_image.src }}
                            resizeMode="cover"
                        >
                            <Text style={styles.bannerText}>{banner.title}</Text>
                        </Image>
                    </View>
                )
            });

            contents = (
                <Carousel delay={3000}>
                    { bannerView }
                </Carousel>
            )
        }

        return (
            <View>
                {contents}
            </View>
        );
    }
});
var TypeView = React.createClass({
    render: function() {
        return (
            <TouchableHighlight onPress={ ()=>this.openProductList('wedding_veil') } style={styles.homeBlock}>
                <View>
                    <Text style={styles.homeBlockText}>
                        婚纱照
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
});

var ListType = React.createClass({
    openProductList: function (type){
        this.props.navigator.push({
            title: 'Product List',
            component: ProductList,
            type: { type },
            //navigator: this.props.navigator
        });
    },

    render: function() {

        return (
            <View style={ styles.container }>

                <View style={ styles.header }>
                    <Text style={ styles.headerText }>幸福管家</Text>
                </View>
                <View>
                    <RNCarousel/>
                </View>
                <Image source={require('../images/background.png')} style={[styles.backgroundImage, {width:Dimensions.get('window').width}]}>
                    <View>
                        <View style={styles.box}>
                            <TouchableHighlight onPress={ ()=>this.openProductList('wedding_veil') } style={styles.homeBlock}>
                                <View>
                                    <Image source={require('../images/icons/icons_hunshazhao.png')} style={{width: 130, height: 50}}/>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={ ()=>this.openProductList('wedding_planning') } style={styles.homeBlock}>
                                <View>
                                    <Image source={require('../images/icons/icons_cehua.png')} style={{width: 130, height: 50}}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.box}>
                            <TouchableHighlight onPress={ this.openProductList.bind(this, 'dresses') } style={[styles.homeBlock]}>
                                <View>
                                    <Image source={require('../images/icons/icons_hunsha.png')} style={{width: 80, height: 50}}/>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={ this.openProductList.bind(this, 'flower') } style={[styles.homeBlock]}>
                                <View>
                                    <Image source={require('../images/icons/icons_huayi.png')} style={{width: 80, height: 50}}/>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={ this.openProductList.bind(this, 'make_up') } style={[styles.homeBlock]}>
                                <View>
                                    <Image source={require('../images/icons/icons_genzhuang.png')} style={{width: 80, height: 50}}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.box}>
                            <TouchableHighlight onPress={ this.openProductList.bind(this, 'compere') } style={[styles.homeBlock]}>
                                <View>
                                    <Image source={require('../images/icons/icons_zhuchi.png')} style={{width: 80, height: 50}}/>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={ this.openProductList.bind(this, 'videography') } style={[styles.homeBlock]}>
                                <View>
                                    <Image source={require('../images/icons/icons_sheying.png')} style={{width: 80, height: 50}}/>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={ this.openProductList.bind(this, 'photography') } style={[styles.homeBlock]}>
                                <View>
                                    <Image source={require('../images/icons/icons_shexiang.png')} style={{width: 80, height: 50}}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.box}>
                            <TouchableHighlight onPress={ this.openProductList.bind(this, 'weddings_stores') } style={[styles.homeBlock]}>
                                <View>
                                    <Image source={require('../images/icons/icons_baihuo.png')} style={{width: 80, height: 50}}/>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={ this.openProductList.bind(this, 'motorcade') } style={[styles.homeBlock]}>
                                <View>
                                    <Image source={require('../images/icons/icons_chedui.png')} style={{width: 80, height: 50}}/>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={ this.openProductList.bind(this, 'honeymoon') } style={[styles.homeBlock]}>
                                <View>
                                    <Image source={require('../images/icons/icons_miyue.png')} style={{width: 80, height: 50}}/>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.tabbar}>
                        <View style={styles.tabbarItem}>
                            <Text>首页</Text>
                        </View>
                        <View style={styles.tabbarItem}>
                            <Text>订单</Text>
                        </View>
                        <View style={styles.tabbarItem}>
                            <Text>我的</Text>
                        </View>
                        <View style={styles.tabbarItem}>
                            <Text>专家</Text>
                        </View>
                        <View style={styles.tabbarItem}>
                            <Text>更多</Text>
                        </View>

                    </View>
                </Image>

            </View>
        );
    }
});

var TypeList = React.createClass({

    render: function () {
        return (
            <Navigator
                initialRoute={{name:'Type list', component:ListType}}
                renderScene={(route, navigator) =>
                    <ListType
                        name={route.name}
                        navigator={this.props.navigator}
                        //onForward={() => {
                        //  var nextIndex = route.index + 1;
                        //  navigator.push({
                        //    name: 'Scene ' + nextIndex,
                        //    index: nextIndex,
                        //  });
                        //}}
                        //onBack={() => {
                        //  if (route.index > 0) {
                        //    navigator.pop();
                        //  }
                        //}}
                    />
                }
            />
        )
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    backgroundImage: {
        flex: 1,
        //resizeMode: 'cover',
    },
    header: {
        //height: 50,
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
        //color:'#fff',
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
        height: 150,
    },
    loadingText: {
        fontSize: 14,
        marginBottom: 20
    },
    bannerImage: {
        flex: 1,
        height: 150,
        width: 360
    },
    bannerText: {
        fontSize: 24,
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        //flexWrap: 'wrap',
        justifyContent: 'center',
        //paddingTop: 5
    },
    homeBlock: {
        flex: 2,
        backgroundColor: '#e88787',
        padding: 10,
        margin: 5,
        //width: 160,
        //height: 60,
        //marginBottom: 20,
        //marginLeft: 10,
        //marginRight: 10,
        borderRadius: 5
    },
    homeBlockSmall: {
        //width: 100,
    },
    homeBlockText: {
        color: '#fff',
        fontSize: 20
    },
    tabbar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tabbarItem: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
    }

});
//AppRegistry.registerComponent('TypeList', () => TypeList);

module.exports = TypeList;