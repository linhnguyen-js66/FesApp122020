import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text,ScrollView,TextInput } from "react-native"
import style from './style'

const Header = ({title}) => {
    return(
        <View style={style.header}>
        <Text style={style.lineone}>{title}</Text>
        </View>
    )
}
export default Header