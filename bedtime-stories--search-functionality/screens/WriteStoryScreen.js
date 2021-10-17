import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ToastAndroid,
 KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';


export default class WriteStoryScr extends React.Component{
    constructor(){
        super();
        this.state={
          title: '',
          author: '',
          story: '',
        }
    }

    submitStory = ()=>{
      db.collection("stories").add({
          title: this.state.title,
          author: this.state.author,
          story: this.state.story
      })
      this.setState({
          title: "",
          author: "",
          story: ""
      })
      //ToastAndroid.show(" Your story has been submitted",ToastAndroid.LONG)
      //ToastAndroid.show(" Your story has been submitted",ToastAndroid.SHORT)
      alert('Story Submitted Successfully ✅✅');
  }
    
    render(){
        return(
          <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
            <Text style={styles.story}> BEDTIME STORIES APP </Text>
            
          <TextInput style={styles.inputBox} placeholder={'Name of your story'} />
          <TextInput style={styles.inputBox}  placeholder={'Author of the  story'} />
          <TextInput style={styles.inputBox2}  placeholder={'Write your story here'} multiline={true}/>
      <TouchableOpacity style={styles.submit} onPress={this.submitStory}>
                      <Text style={styles.text}>Submit</Text>
                      </TouchableOpacity>
          </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: 280,
    alignSelf: 'center',
    height: 40,
    border : 'dashed',
    fontFamily : 'Eras Bold ITC',
    textAlign: 'center',
    borderWidth: 4,
    backgroundColor: 'pink'
    },
    inputBox2: {
      marginTop: 20,
      width: 280,
      alignSelf: 'center',
      fontFamily : 'Eras Bold ITC',
      height: 200,
      border : 'dashed',
      textAlign: 'center',
      borderWidth: 4,
      backgroundColor: 'pink'
      },
      text:{
      color:'blue',
      fontSize:20,
      textAlign: 'center',
      fontWeight: 'Eras Bold ITC'
      },
      submit:{
      justifyContent:'center',
      borderWidth:4,
      backgroundColor:'black',
      marginTop:10,
      marginLeft:650,
      width:100,
      height:45,
      },
      story:{
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor: 'pink',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Eras Bold ITC'
    },
    
})