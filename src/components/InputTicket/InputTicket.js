import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text,ScrollView,TextInput } from "react-native"
import style from './style'

const InputTicket = ({title,value,index}) => {
    return(
        <View style={style.container}>
        <View style={{marginRight:16}}>
        <Text style={[style.textInput, index==1 && {marginHorizontal:8}]}>{title}</Text>
        </View>
           <View style={style.containInput}>
              <TextInput value={value} style={[style.input, index ==2 && {marginLeft:17}]}/>           
           </View>
 
        </View>
    )
}
export default InputTicket