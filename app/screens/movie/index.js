import React from 'react';
import Controller from '../../controller'
import FullImage from './components/fullimage'
import { Text , View , StyleSheet , TextInput , ScrollView , TouchableOpacity , Image } from 'react-native';
import {toggleTabBar } from '../../actions'
import { connect } from 'react-redux'


class Movies extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            movies : []
         };
    }

    componentDidMount(){

        this.getPopular()

        const dispatch = this.props.dispatch 

        if(this.props.TabBar.open == false){
             dispatch(toggleTabBar(true))
        }

    }

    getPopular = () => {

        Controller.getMovie().then( (response) => {
            this.setState({
                movies : response.Search
            })
        }).catch((error) =>{
            console.log(error)
        })
        

    }

    navigates = (item) => {

        const navigation = this.props.navigation 

        navigation.navigate('MoviesDetail' , { item : item })

        const dispatch = this.props.dispatch 

        dispatch(toggleTabBar(false))

    }

    render(){

        let Movies = this.state.movies.map((item , key) => {
            return  (
                <TouchableOpacity style={Item.box} key={key} onPress={ () => this.navigates(item)}> 
                    <View style={Item.boxImage}>
                        <FullImage source={{uri: item.Poster }} ratio={1.5} /> 
                    </View>
                    <View style={Item.boxText}>
                        <Text style={{fontWeight : 'bold' , fontSize : 16 , marginBottom : 12}}> {item.Title} </Text>
                        <Text style={{fontSize : 12}}> {item.Year} </Text>
                    </View>
                </TouchableOpacity>
            )
        })

        return (
            <ScrollView style={Item.styles} > 
                {
                    Movies.length > 0 ? Movies : (<Text> loading... </Text>)
                }
            </ScrollView>
        )
    }
}

const Item = StyleSheet.create({
    styles : {
        padding : 12 ,
        marginTop : 40 , 
        borderRadius : 4 , 
        marginBottom : 12 , 
        position : 'relative' , 
        flex : 1 , 
        flexDirection : 'column' 
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

export default connect( ({TabBar}) => {
    return {
        TabBar : TabBar
    }
})(Movies)