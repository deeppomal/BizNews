import React, { Component } from "react";
import {Alert, StyleSheet,ActivityIndicator,FlatList} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title,View } from 'native-base';
import {getNews} from '../service/News';
import NewsItem from '../components/NewsItem';
import {connect} from 'react-redux';
import { country } from "../config/rest_config";

class NewsScreen extends Component {

    constructor(props){
        super(props)
        this.state={
          isLoading:true,
          newsData:null,
        }
      }

    componentDidMount(){

      getNews('in').then(data=>{
        this.setState({
            isLoading:false,
            newsData:data
        })
      },error=>{
        console.log(error)
        }
      )
    }

    componentDidUpdate(prevProps){
      if(prevProps.countryName!==this.props.countryName){

        this.setState({
          isLoading:true,
          newsData:null
        })
        getNews(this.props.countryName).then(data=>{
          this.setState({
              isLoading:false,
              newsData:data
          })
        },error=>{
          console.log(error)
          }
        )
      }
    }
    render() {

        const {countryName} = this.props;
      
        let newsList = this.state.isLoading ? (
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator animating={this.state.isLoading}/>
          </View>
        ) :(
            <FlatList
                showsVerticalScrollIndicator ={false}
              data={this.state.newsData}
              renderItem={({item}) =>{
                  return <NewsItem data={item}
                />
              }}
              
          />
    
        )
        return (

            <View style={styles.content}>
             
                {newsList}
                
            </View>
           
        );
    }
}

export default connect(mapStateToProps)(NewsScreen);

function mapStateToProps(state){
  return {
    countryName : state.countryName
  }
}
const styles = StyleSheet.create({
    content:{
        padding:16,
        flex:1
      }
});