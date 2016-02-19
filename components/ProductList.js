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

var ProductView = require('./ProductView');
var Dimensions = require('Dimensions');
var Product = React.createClass({
    openProduct: function (nid){
        //console.log(nid);
        this.props.navigator.push({
            component: ProductView,
            nid: { nid }
        });
    },

    render: function() {
        var product = this.props.product;
        var imgWidth = (Dimensions.get('window').width-30)/2;
        console.log(imgWidth);
        return (
            <TouchableHighlight onPress={ ()=>this.openProduct(product.nid) } style={ styles.product }>
                <View >
                    <Image
                        //style={ styles.productImage }
                        style={{width: imgWidth,height:imgWidth}}
                        source={ { uri: product.field_image.src } }
                    />
                    <View style={ styles.productInfo }>
                        <Text style={ styles.productName }>
                            { product.title }
                        </Text>
                        <Text style={ styles.productPrice }>
                            { product.field_price }
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
});

var ProductList = React.createClass({
    watchID: (null: ?number),

    getInitialState: function() {
        return {
            list: [],
            currentIndex: 0,
            initialPosition: 'unknown',
            lastPosition: 'unknown',
        };
    },
    componentDidMount: function() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
    },

    componentWillMount: function(){
        navigator.geolocation.clearWatch(this.watchID);
        var type = this.props.type.type;
        //fetch('http://192.168.1.9/drupal741/json/nodetype/'+type)
        fetch('http://43.227.252.137/lucky/json/nodetype/'+type)
            .then(res => res.json())
            .then(res => this.setState({ list: res.nodes }));
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
            var productTeaser = this.state.list.map(function(product, key) {
                return <Product product={product} key={key} navigator={navigator}/>;
            });
            contents = (
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    showsHorizontalScrollIndicator={true}
                    onScroll={() => { console.log('onScroll!'); }}
                    style={ [styles.scrollView] }
                    >
                    <View style={styles.productList}>
                        { productTeaser }
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
                <View>
                    <Text>
                        <Text style={styles.title}>Initial position: </Text>
                        {this.state.initialPosition}
                    </Text>
                    <Text>
                        <Text style={styles.title}>Current position: </Text>
                        {this.state.lastPosition}
                    </Text>
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
        //paddingTop: 20,
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    productList: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        flexWrap: 'wrap',
        //justifyContent: 'center',
        //height: 2000
        paddingBottom: 10
    },
    product: {
        //flex: 1,
        //width: 170,
        //height: 190,
        margin: 5,
        //overflow: 'hidden'
    },
    productInfo: {
        //borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
        //borderLeftWidth: 1,
        //borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
        //borderRightWidth: 1,
        //borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
        //borderBottomWidth: 1,
        //padding: 10,
        //alignItems: 'center',
        //flexDirection: 'row'
    },
    productImage: {
        //flex: 1,
        height: 170,
        width: 170
    },
    productName: {
        fontSize: 14,
        fontWeight: "500"
    },
    productPrice: {
        //flex: 0.25,
        //alignItems: 'left'
    },
    scrollView: {
        //backgroundColor: '#6A85B1',
        //height: 580,
        paddingLeft: 5,
        paddingRight: 5,
        //margin: 0
    },

    contentContainer: {
        paddingVertical: 10
    },
    title: {
        fontWeight: '500',
    },
});
//AppRegistry.registerComponent('ProductList', () => ProductList);

module.exports = ProductList;