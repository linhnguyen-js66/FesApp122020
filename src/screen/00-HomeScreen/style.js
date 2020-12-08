import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover"
      },
      header:{
          justifyContent:'center',
          alignSelf:'center',
          marginTop:48,
      },
      textlineOne:{
          textAlign:'center',
          fontSize:20,
          fontWeight:'bold'
      },
      textlineTwo:{
          fontSize:17
      },
      buttonOne:{
          marginTop:32,
          flexDirection:'row',
          alignSelf:'center',
          justifyContent:'center'
      },
      buttonChild:{
          marginHorizontal:16
      },
      setting:{
          flexDirection:'row',
          marginTop:32,
          marginHorizontal:16,
      },
      text:{
          fontSize:17,
          marginHorizontal:8,
          padding:4
      }
})