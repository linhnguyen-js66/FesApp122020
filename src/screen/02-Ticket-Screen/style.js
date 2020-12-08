import {StyleSheet} from 'react-native'
export default StyleSheet.create({
 header:{
     backgroundColor:'#005580',
     flex:1,
     justifyContent:'center',
     marginHorizontal:16
 },
 lineone:{
     padding:8,
     color:'white',
     fontSize:17
 },
 inputTicket:{
     flex:1,
     marginHorizontal:16,
     flexDirection:'row',
     marginTop:8
 },
 total:{
     borderWidth:0.5,
    borderColor:'black',
    flex:1,
    justifyContent:'flex-end',
    marginHorizontal:16
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