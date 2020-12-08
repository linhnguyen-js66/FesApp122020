import {StyleSheet} from 'react-native'
import { Row } from 'react-native-table-component'
export default StyleSheet.create({
  header:{
    backgroundColor:'#005580',
    flex:1,
    justifyContent:'center',
    marginHorizontal:16
  },
  lineFirst:{
      padding:8,
      color:'white',
      fontSize:17
  },
  inputTicket:{
      flexDirection:'row',
      marginHorizontal:16,
      marginTop:16
  },
  ControlPanel:{
      flexDirection:'row'
  },
  total:{
    borderWidth:0.5,
   borderColor:'black',
   justifyContent:'flex-end',
   marginRight:88,
},
containerTotal:{
  flex:1,
  flexDirection:'row',
  justifyContent:'flex-end',
  alignItems:'flex-end'  
},
caculate:{
    padding:8
}
})