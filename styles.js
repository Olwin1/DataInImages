import {StyleSheet} from 'react-native'; 
const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    media: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,

  },
  name: {
  fontSize: 18,
  },
  dateWrapper: {
    marginLeft:"auto",
  },
  date: {
    fontSize: 16,
    textAlign: "right",
    paddingRight: 10,
  },
  descriptionWrapper: {
    padding: 15,
  },
  description: {
    textAlign:"left",
    lineHeight: 20,


  },
  item: {
    borderWidth: 0.8,
    borderColor: "#d9d9d9",
  },
  }); 
  export default styles;