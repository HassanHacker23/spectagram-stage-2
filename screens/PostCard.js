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
    Image
} from "react-native";

export default class PostCard extends Component {

render(){
    return(
        <View style ={styles.container}>
        <View style ={styles.CardContainer}>
        <View stlye ={style.authorContainer}>
         <View style ={style.authorImageContainer}>
         <Image>
            source={reqiure("../assets/profile_img.png")}
            style={styles.profileImage}
         </Image>
        <View style={stlyles.authorNameContainer}>
            <Text style={stlyes.authorNameContainer}>{this.props.post.author}</Text>
        </View>
        </View>
        <Image> source={require("../assets/post.jpeg")} style={styles.postImage}</Image>
        <View style={styles.CaptionContainer}>
            <Text style={styles.captionText}> 
            {this.props.post.caption}
            </Text>
            </View>
        <View stlye={stlyes.actionContainer}>
            <View style={styles.likeButton}>
                <Ionicons name={'heart'} size={RFvalue(30)} color={"white"} ></Ionicons>
                <Text stlye={styles.likeText}>12k</Text>
            </View>
        </View>
         </View>
         </View>
         </View>
    )
}
}
