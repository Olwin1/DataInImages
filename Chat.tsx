/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './styles';
import style from './message';

const Chat = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Message = (props:any) => {
    return (
      <View style={[props.isMine?style.sent:style.recieved, { flexDirection: 'row', flexWrap: 'wrap' }]}>
        {!props.isMine&&<Image source={require('./avatar.png')} style={styles.imageSmaller} />}
      <View>
        <View style={[style.message, props.isMine?style.sentBackground:style.recievedBackground]}>
        <Text>{props.children}</Text>
        </View>
      </View>
      </View>
    );
  };
  const Messages = () => {
    return (
      <View>
        <Message isMine={true}>Hello{"\n"}dfdf{"\n"}dfdf{"\n"}dfdf{"\n"}dfdf{"\n"}dfdf{"\n"}dfdf{"\n"}dfdf{"\n"}dfdf{"\n"}dfdf{"\n"}dfdf{"\n"}dfdf{"\n"}dfdf</Message>
        <Message isMine={false}>Hi</Message>
        <Message isMine={true}>OMG HI</Message>
        <Message isMine={true}>YOU RESPONDEDDED</Message>
        <Message isMine={true}>WOOOO</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>
        <Message isMine={false}>whatever.</Message>

      </View>
    );
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}} keyboardVerticalOffset={110}>
      <ScrollView>
      <Messages />
      <View  style={{flexDirection: "row", padding: 5, marginLeft:"auto", marginBottom:20}}>
      <TextInput
      style={styles.input}
      //onChangeText={onChangeText}
      //value={text}
      />
      <TouchableOpacity style={{borderRadius:50,backgroundColor:"#cecece",width: 45,height: 45}}><Image style={{height:30, width: 30, marginLeft:10, marginTop:8}} source={require('./send.png')} /></TouchableOpacity>
      </View></ScrollView></KeyboardAvoidingView>

  );
};
export default Chat;
