import React from 'react';
import Todos from './todos';
import Movies from './movie' ; 
import MoviesDetail from './movieDetail'
import { TabNavigator , StackNavigator } from 'react-navigation' 
import { Icon } from 'react-native-elements'
import MovieDetail from './movieDetail';
import TabBar from './components/tabBar'

const Movie = StackNavigator({
  MovieList : { screen : Movies, path : '/movie'  }   , 
  MoviesDetail : { screen : MovieDetail, path : '/movieDetail'}
} , {
  initialRouteName : 'MovieList' , 
  headerMode : 'none'
})

const Tabs = TabNavigator(
    {
        Movies : {
            screen : Movie ,
        } ,
        Todos : {
            screen : Todos , 
        }  
    } , 
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName , type ;
              if (routeName === 'Todos') {
                iconName = 'add-to-list'
                type='entypo'
              } else if (routeName === 'Movies') {
                iconName = `movie`;
                type='MaterialIcons'
              }
      
              return <Icon name={iconName} type={type} color={tintColor} />;
            },
          }),
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
          swipeEnabled : true , 
          tabBarComponent: TabBar 
    }
  )

  const TAB_BAR_OFFSET = -60;

  export default Tabs

