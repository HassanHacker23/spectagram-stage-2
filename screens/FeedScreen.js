import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    FlatList
} from "react-native";

export default class FeedScreen extends Component {
    render(){
        return(
            <View style ={styles.container}>
              <SafeAreaView style = {styles.droidSafeArea}></SafeAreaView>  
              <View style = {styles.appTitle}>
                <View stlye={styles.appIcon}>
                    <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                    ></Image>
                </View>
             <View> 
                <View style={styles.cardContainer}>
                    <FlatList
                    keyExtractor={this.keyExtractor}
                    data={posts}
                    renderItem={this.renderItem}
                        
                    ></FlatList>

                </View>
                </View>   
              </View>
            </View>
        )
        
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1 ,
        backgroundColor : 'black'
    
},
droidSafeArea:{
    marginTop: Platform.oS === 'android' ? statusbar.currentHeight : RFvalue(35)
},
appTitle:{
    flex:0.07,
    flexDirection: 'row'
},
appIcon:{
    flex:0.2,
    justifyContent: 'center',
    alignItems:'center'
},
iconImage:{
    width:'100%',
    height:'100%',
    resizeMode: 'contain'
},
appTitleTextContainer:{
    flex:0.08,
    justifyContent:'center'
},
appTitleText:{
    color:'white',
    fontSize: RFvalue(28),
},
cardContainer:{
    flex:0.85
}
})