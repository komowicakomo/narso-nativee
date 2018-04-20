import React from 'react';
import Controller from '../../controller'
import FullImage from '../movie/components/fullimage'
import { Icon } from 'react-native-elements'
import { Text , View , StyleSheet , TextInput , ScrollView , TouchableOpacity , Image , Animated , Platform ,  RefreshControl , StatusBar } from 'react-native';
import {toggleTabBar } from '../../actions'
import { connect } from 'react-redux'

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 80 : 93;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class MovieDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            detail : {} , 
            scrollY: new Animated.Value(
                Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
            ),
            refreshing: false , 
            height: -1,
            width: -1
         };
    }

    componentDidMount(){

        const { params } = this.props.navigation.state

        Controller.movieDetail({
            id : params.item.imdbID
        }).then( (response) => {
            this.setState({
                detail : response
            })
        }).catch((error) =>{
            console.log(error)
        })

    }

    measureLayout =  ({nativeEvent}) => {
        const height = nativeEvent.layout.height;
        const width = nativeEvent.layout.width;
        this.setState({height, width});
      }

    goBack = () => {
        let navigation = this.props.navigation 
        const dispatch = this.props.dispatch 

        navigation.goBack()
        dispatch(toggleTabBar(true))
    }

    render(){

        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0
        );

        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });

        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
          });

        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
          });
        
        const { params } = this.props.navigation.state

        const detail = this.state.detail 

        const loaded = Object.keys(detail).length === 0 && detail.constructor === Object

          console.log(detail)

        return (
            <View style={Item.styles}>
                <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.251)"
                />
                <Animated.ScrollView 
                    style={Item.contentStyle}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true },
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({ refreshing: true });
                                setTimeout(() => this.setState({ refreshing: false }), 1000);
                            }}
                            // Android offset for RefreshControl
                            progressViewOffset={HEADER_MAX_HEIGHT}
                            />
                    }
                    // iOS offset for RefreshControl
                    contentInset={{
                        top: HEADER_MAX_HEIGHT,
                    }}
                    contentOffset={{
                        y: -HEADER_MAX_HEIGHT,
                    }}
                    > 
                    <Tabs initialPage={1}>
                        <Tab heading="Tab1">
                        <View  style={{ padding: 12  , paddingTop : 44 }}  > 
                            <Text> 1 </Text>
                            <Text style={{ fontSize : 14 , marginTop : 12 , opacity : 0.8 }} >Starring :  { ( loaded ? 'loading...' : detail.Actors ) } </Text>
                            <Text style={{ fontSize : 14 , marginTop : 8 , opacity : 0.8 }} >genre :  { ( loaded ? 'loading...' : detail.Genre ) } </Text>
                            <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                            <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                            <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                            <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                        </View>
                        </Tab>
                        <Tab heading="Tab2">
                            <View  style={{ padding: 12  , paddingTop : 44 }} > 
                                <Text> 2 </Text>
                                <Text style={{ fontSize : 14 , marginTop : 12 , opacity : 0.8 }} >Starring :  { ( loaded ? 'loading...' : detail.Actors ) } </Text>
                                <Text style={{ fontSize : 14 , marginTop : 8 , opacity : 0.8 }} >genre :  { ( loaded ? 'loading...' : detail.Genre ) } </Text>
                                <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                                <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                                <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                                <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                            </View>
                        </Tab>
                        <Tab heading="Tab3">
                            <View  style={{ padding: 12  , paddingTop : 44 }} > 
                                <Text> 3 </Text>
                                <Text style={{ fontSize : 14 , marginTop : 12 , opacity : 0.8 }} >Starring :  { ( loaded ? 'loading...' : detail.Actors ) } </Text>
                                <Text style={{ fontSize : 14 , marginTop : 8 , opacity : 0.8 }} >genre :  { ( loaded ? 'loading...' : detail.Genre ) } </Text>
                                <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                                <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                                <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                                <Text style={{ fontSize : 16 , marginTop : 14 , marginBottom : 60 }} > { ( loaded ? 'loading...' : detail.Plot ) } </Text>
                            </View>
                        </Tab>
                    </Tabs>

                </Animated.ScrollView>
                <Animated.View style={ [Item.headerStyle , { transform: [{ translateY: headerTranslate }]}] } >
                    <View style={Item.imgContainer}>
                        <Animated.Image
                        style={[
                        Item.backgroundImage,
                        {
                            opacity: imageOpacity,
                            transform: [{ translateY: imageTranslate }],
                        }
                        ]}
                        source={{ uri : params.item.Poster }}
                        />
                    </View>
                    <View style={Item.tabView} > 

                    </View>
                </Animated.View>
                <View style={Item.bar}>
                    <TouchableOpacity onPress={ this.goBack } style={{ position : 'absolute', top : 0 , left  : 12 }}>
                        <Icon name="back"  type='entypo' />   
                    </TouchableOpacity>
                    <Text style={Item.title}>{params.item.Title}</Text>
                </View>
            </View>
            
        )
    }
}

// <FullImage source={{ uri : params.item.Poster }} ratio={0.5} />

const Item = StyleSheet.create({
    styles : {
        position : 'relative' , 
        flex : 1 , 
        flexDirection : 'column' ,
        backgroundColor : 'white'
    } , 
    headerStyle : {
        position:'absolute' , 
        left : 0 ,
         right : 0 , 
         top : 0  , 
         backgroundColor : 'tomato' , 
         paddingLeft : 40 , 
         zIndex : 2 ,
         height: HEADER_MAX_HEIGHT
    } , 
    tabView : {
        position : 'absolute' , 
        zIndex : 2 , 
        left : 0 , 
        right : 0 , 
        bottom : 0 ,
        height : 32 , 
        backgroundColor : 'pink' , 
        transform : [{translateY : 32 }]
    } , 
    imgContainer : {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom : 0 ,
        overflow : 'hidden',
        opacity : 0.8 
    } , 
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
      },
    bar: {
        marginTop: Platform.OS === 'ios' ? 28 : 38,
        height: 32 ,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : 'transparent' ,
        position : 'absolute' , 
        left : 0 , 
        top : 0 , 
        right : 0 ,
        zIndex : 3 
      },
      title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
      },
    contentStyle : {
        flex : 1 ,
        position : 'relative' , 
        paddingBottom : 120 , 
        paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0
    } , 
    box : {
        flexDirection : 'row',
        flex : 1 , 
        marginBottom : 12 
    } , 
    boxImage : {
        flex : 2 
    } , 
    boxText : {
        flex : 3 , 
        paddingLeft : 12 
    }
 })

export default connect()(MovieDetail)