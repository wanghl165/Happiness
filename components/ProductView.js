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
    TouchableHighlight,
    } = React;


var ProductView = React.createClass({
    getInitialState: function() {
        return {
            product: [],
        };
    },
    componentWillMount: function(){
        var nid = this.props.nid.nid;
        fetch('http://43.227.252.137/lucky/json/node/'+nid)
            .then(res => res.json())
            .then(res => {this.setState({ product: res.nodes })} ).done();
    },
    render: function() {
        var product = this.state.product;
        //console.log(this.state.product.length);
        var contents;
        if (!this.state.product.length) {
            contents = (
                <View style={ styles.loading }>
                    <Text style={ styles.loadingText }>Loading</Text>
                    <ActivityIndicatorIOS />
                </View>
            )
        } else {
            var p = product[0].node
            contents = (
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                    showsHorizontalScrollIndicator={true}
                    onScroll={() => { console.log('onScroll!'); }}
                    style={ [styles.scrollView] }>
                    <Image
                        style={ styles.productImage }
                        source={ { uri: p.picture.src } }
                    />
                    <View style={ styles.productInfo }>
                        <Text style={ styles.productName }>
                            { p.title }
                        </Text>
                        <Text style={ styles.productPrice }>
                            { p.price }
                        </Text>
                        <Text style={ styles.productBody }>
                            {p.body}
                        </Text>
                    </View>

                </ScrollView >
            )
        }
        return (
                <View >
                    {contents}
                    <View style={styles.productBottom}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>预约</Text>
                        </View>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>咨询专家</Text>
                        </View>
                    </View>
                </View>
        )
    }
});
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

    product: {
        //width: 120,
        //height: 150,
        margin: 10,
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
        height: 285,
        width: 385
    },
    productName: {
        fontSize: 14,
        fontWeight: "500",
    },
    productPrice: {
        flex: 0.25,
        //alignItems: 'right'
    },
    productBody: {
        paddingBottom: 50,
    },
    scrollView: {
        //backgroundColor: '#6A85B1',
        height: 510,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
        margin: 0
    },
    horizontalScrollView: {
        height: 120,
    },
    contentContainer: {
        paddingVertical: 20
    },
    productBottom: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        backgroundColor: '#ECECEC',
        padding: 5,
        justifyContent: 'center',
    },
    button: {
        borderRadius: 2,
        backgroundColor: '#ff9696',
        padding: 10,
        margin: 5,
    },
    buttonText: {
        color: '#FFF',
        width: 100,
        textAlign: 'center'
    }
});

module.exports = ProductView;