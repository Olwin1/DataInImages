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
 
 const List = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   const PeopleBox = () => {
     const Header = () => {
       return (
         <View style={styles.media}>
           <Image
             source={require('./avatar.png')}
             style={styles.image}
           />
           <Text style={styles.name}>Jason Doe</Text>
           <View style={styles.dateWrapper}>
           <Text style={styles.date}>25 Dec</Text>
           </View>
       </View>)
     }
     const Description = () => {
       return (
         <View style={styles.descriptionWrapper}>
         <Text style={styles.description}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
         eiusmod tempor incididunt ut labore.
       </Text>
       </View>
       )
     }
     return (
       <View style={styles.item}>
       <Header />
       <Description />
       </View>
 
     );
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <View>
           <PeopleBox />
           <PeopleBox />
           <PeopleBox />
           <PeopleBox />
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 export default List