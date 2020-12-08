import React, { useEffect, useState } from 'react'
import { View,Text,ScrollView,TouchableOpacity} from "react-native"
import style from './style'

const ButtonTable = ({title,onClick,index}) => {
    return(
        <TouchableOpacity style={[style.ButtonTable,index==2 && {marginLeft:8,marginRight:16}]}
        onPress={onClick}
        >
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
      
    )
}
export default ButtonTable