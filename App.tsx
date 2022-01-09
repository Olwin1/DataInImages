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
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import List from './List';
import Chat from './Chat';
const Stack = createStackNavigator();

interface ActionBarImageProps {
  onPress: any
}

const App = ({navigation}: any) => {
  const ActionBarImage: React.FC<ActionBarImageProps> = (props) => {
    return (
        <Pressable onPress={() => props.onPress()} style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Image source={require('./back.png')} style={styles.Back} />
        <Image source={require('./avatar.png')} style={styles.imageSmaller} />
        </Pressable>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={List}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({navigation}) => ({headerLeft: () => <ActionBarImage onPress={navigation.goBack}/>})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
