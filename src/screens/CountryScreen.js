import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";
import {connect} from 'react-redux';

class CountryScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = { selectedButton: null };
        this.setCountry = this.setCountry.bind(this);
    }
    
    setCountry = (text) => {
     
        this.setState({ selectedButton: text });
        
        this.props.dispatch({
            type:'SET_COUNTRY',
            countryName:text})
    
    }
    render() {
        console.log(this.state.selectedButton);
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => this.setCountry('in')} 
                        style={{
                            borderColor:'#000',
                            borderWidth:2,
                            padding:5,
                            margin:5,
                            backgroundColor:
                                this.state.selectedButton === "in"
                                    ? "black"
                                    : "white",
                            
                        }}> 
                        <Text style={{
                            color:
                            this.state.selectedButton === "in"
                                ? "white"
                                : "black",
                        }}>
                            India   
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setCountry('us')} 
                        style={{
                            borderColor:'#000',
                            borderWidth:2,
                            padding:5,
                            margin:5,
                            backgroundColor:
                                this.state.selectedButton === "us"
                                    ? "black"
                                    : "white",
                            
                        }}> 
                        <Text style={{
                            color:
                            this.state.selectedButton === "us"
                                ? "white"
                                : "black",
                        }}>
                            USA  
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setCountry('au')} 
                        style={{
                            borderColor:'#000',
                            borderWidth:2,
                            padding:5,
                            margin:5,
                            backgroundColor:
                                this.state.selectedButton === "au"
                                    ? "black"
                                    : "white",
                            
                        }}> 
                        <Text style={{
                            color:
                            this.state.selectedButton === "au"
                                ? "white"
                                : "black",
                        }}>
                            Australia   
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setCountry('gb')} 
                        style={{
                            borderColor:'#000',
                            borderWidth:2,
                            padding:5,
                            margin:5,
                            backgroundColor:
                                this.state.selectedButton === "gb"
                                    ? "black"
                                    : "white",
                            
                        }}> 
                        <Text style={{
                            color:
                            this.state.selectedButton === "gb"
                                ? "white"
                                : "black",
                        }}>
                            UK  
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setCountry('ca')} 
                        style={{
                            borderColor:'#000',
                            borderWidth:2,
                            padding:5,
                            margin:5,
                            backgroundColor:
                                this.state.selectedButton === "ca"
                                    ? "black"
                                    : "white",
                            
                        }}> 
                        <Text style={{
                            color:
                            this.state.selectedButton === "ca"
                                ? "white"
                                : "black",
                        }}>
                            Canada   
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setCountry('sg')} 
                        style={{
                            borderColor:'#000',
                            borderWidth:2,
                            padding:5,
                            margin:5,
                            backgroundColor:
                                this.state.selectedButton === "sg"
                                    ? "black"
                                    : "white",
                            
                        }}> 
                        <Text style={{
                            color:
                            this.state.selectedButton === "sg"
                                ? "white"
                                : "black",
                        }}>
                            Singapore
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

export default connect()(CountryScreen);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        marginStart:10,
        marginEnd:10
    },
    to : {
        borderColor:'#000',
        borderWidth:2,
        padding:5,
        margin:5,
        
    },
});