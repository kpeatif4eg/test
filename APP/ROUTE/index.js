  
  import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Gallery from '../UI/Containers/Gallery';
import PhotoLayout from '../UI/Containers/PhotoLayout';
import HOC from '../UI/HOC'


 const testRoute = createStackNavigator(
    {
        Gallery:{
            screen: Gallery,
            navigationOptions:{
                title:'Gallery',

            },
        },
        Photo:{
            screen:HOC(PhotoLayout),
            navigationOptions:{
                title: 'Fullsize image'
            }
        }
    },
    
    {
        initialRouteName:'Gallery',
    }
)


export default testRoute;

