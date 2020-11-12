import React, { Component } from 'react';
import { Image ,StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View } from 'native-base';

export default class NewsItem extends Component {
  
  constructor(props){
    super(props)
    this.data=props.data
  }
  render() {
    return (
        <Content>
          <Card style={styles.card}>
            <CardItem cardBody style={styles.cardItem}>
              <Image source={{uri: this.data.urlToImage}} 
              style={styles.image}/>
            
              <Text style={styles.title}>{this.data.title}</Text>
              <Text style={styles.subTitle}>{this.data.description}</Text>
            </CardItem>
          </Card>
        </Content>
    );
  }
}

const styles= StyleSheet.create({
  cardItem:{
    flexDirection:'column',
   
  },
  image:{
    resizeMode:'cover',
    height: 350, 
    width: '100%', 
    flex: 1,
    
  },
  title:{
    fontSize:18,
    marginStart:16,
    marginEnd:16,
    marginTop:10
    
  },
  subTitle:{
    fontSize:16,
    marginStart:16,
    marginEnd:16,
    marginTop:16,
    marginBottom:25,
    color:'#808080'
  },
  card:{
  
  }
})