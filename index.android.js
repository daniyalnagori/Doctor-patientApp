
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/App'


console.disableYellowBox = true;

AppRegistry.registerComponent('DoctorApp', () => App);
