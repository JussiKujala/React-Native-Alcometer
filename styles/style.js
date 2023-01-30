import { StyleSheet } from "react-native";

export default StyleSheet.create({


    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button:{
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
      },
      dark:{
        borderColor: 'white',
        color: 'white',
        backgroundColor: 'gray',

      },
      light:{
        backgroundColor: 'white',
      },
      heading:{
        fontSize: 30,
        fontWeight:'bold',

      },
      textStyle:{
        fontSize: 20
      },
      result: {
        fontSize: 30,
      }

})