import {Dimensions, StyleSheet} from 'react-native'; 
const style = StyleSheet.create({
messageWrapper: {

},
message: {
  backgroundColor: "#fff",
  borderWidth: 1,
  borderColor: "#e5e5ea",
  borderStyle: "solid",
  display: "flex",
  flexDirection: "column",
  fontFamily: "SanFrancisco",
  fontSize: "1.25rem",
  marginTop: 0,
  padding: 5,
  maxWidth: 600,
  borderRadius: 12,

},
sent: {
  marginRight: 15,
  marginLeft: "auto",
},
recieved: {
  marginRight: "auto",
  marginLeft: 15,
},
sentBackground: {
  backgroundColor: "#b076db",
},
recievedBackground: {

}

}); 
export default style;