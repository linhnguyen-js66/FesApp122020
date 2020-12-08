import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native"
import style from './style'

const ButtonForm = ({title,onClick,index}) => {
    return(
       <TouchableOpacity onPress={onClick} style={style.buttonContainer}>
           <Text style={style.textButton}>{title}</Text>
       </TouchableOpacity>
    )
}
export default ButtonForm