import React, { Component } from 'react'
import { View, WebView, StyleSheet }

from 'react-native'
const WebViewScreen = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint' }}
         />
      </View>
   )
}
export default WebViewScreen;

const styles = StyleSheet.create({
   container: {
      height: 350,
   }
})