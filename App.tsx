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
const Stack = createStackNavigator();

const App = () => {
  const ActionBarImage = () => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Image source={require('./back.png')} style={styles.Back} />
        <Image source={require('./avatar.png')} style={styles.imageSmaller} />
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={List}
          options={{headerLeft: () => <ActionBarImage />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
