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
  Platform,
  FlatList
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chat = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Message = (props: any) => {
    return (
      <View
        style={[
          props.isMine ? style.sent : style.recieved,
          {flexDirection: 'row', flexWrap: 'wrap'},
        ]}>
        {!props.isMine && (
          <Image source={require('./avatar.png')} style={styles.imageSmaller} />
        )}
        <View>
          <View
            style={[
              style.message,
              props.isMine ? style.sentBackground : style.recievedBackground,
            ]}>
            <Text>{props.children}</Text>
          </View>
        </View>
      </View>
    );
  };
  const Messages = () => {
    console.log("test")
    return (
      <FlatList
      data={[{"key": "Hello There"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}, {"key": "Hi"}]}
      renderItem={({item}) => <Message isMine={true}>{item.key}</Message>} />

    );
  };
  let txt = ""
  const handleSend = () => {
    console.log("call successful")
    /*
    const clearAll = async () => {
      try {
        await AsyncStorage.clear()
      } catch(e) {
        // clear error
      }
    
      console.log('Done.')
    }
    clearAll()

        */
        const getAllKeys = async () => {
          let keys:string[] = []
          try {
            keys = await AsyncStorage.getAllKeys()
          } catch(e) {
            // read key error
          }
          return keys

          
        }
        if(txt != "") {
        getAllKeys().then(keys => {
          console.log(true)
          console.log(keys)
          //keys.push("@filler")
          let newArray = []
          for (let index = 0; index < keys.length; index++) {
            if(keys[index].startsWith("@message-user")) {
            newArray.push(keys[index].replace("@message-user-", ""))
            }}
          newArray.sort(function(a:any, b:any) {
            return a - b;
          });
          const storeData = async (value:string) => {
            try {
              await AsyncStorage.setItem('@message-user-'+newArray.length, value)
            } catch (e) {
              // saving error
            }
          }

          storeData(txt)
        })}



  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={110}>

        <Messages />

      <View
        style={[
          {
            flexDirection: 'row',
            padding: 5,
            marginLeft: 'auto',
            marginBottom: 0,
          },
          styles.behind,
        ]}>
        <TextInput
          style={styles.input}
          onChangeText={text => txt=text}
          //value={text}
        />
        <TouchableOpacity
          style={{
            borderRadius: 50,
            backgroundColor: '#cecece',
            width: 45,
            height: 45,
          }} onPress={handleSend}>
          <Image
            style={{height: 30, width: 30, marginLeft: 10, marginTop: 8}}
            source={require('./send.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{height: 5, backgroundColor: '#f2f2f2'}}></View>
    </KeyboardAvoidingView>
  );
};
export default Chat;
