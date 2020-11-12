import React, { Component } from 'react';
import {Alert, StyleSheet} from 'react-native';
import { Container,  Text, Title } from 'native-base';
import NewsScreen from './NewsScreen' ;
import CountryScreen from './CountryScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default class HomeScreen extends Component {



  render() {
    

    return (
      <Container >
        <Text style={styles.header}>Browse News</Text>
        <CountryScreen />
        <NewsScreen />
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  header:{
    justifyContent:'center',
    backgroundColor:'#fff',
    fontSize:30,
    marginTop:50,
    marginStart:16,
    marginBottom:20
  }
})