// imports
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create component
const App = () => (
  <View>
    <Header title={'Albums'} />
    <AlbumList />
  </View>
);

// render component
AppRegistry.registerComponent('albums', () => App);
