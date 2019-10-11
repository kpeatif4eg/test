/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { Provider } from 'react-redux';
import store from './APP/BLL/store'
import Gallery from './APP/UI/Containers/Gallery';
import {createAppContainer} from 'react-navigation';
import Root from './APP/ROUTE';


const AppConatiner = createAppContainer(Root);

class App extends React.Component{
  render(){
    return (
    <Provider store={store}>
      <AppConatiner />
    </Provider>
    );
  }
};


export default App;
