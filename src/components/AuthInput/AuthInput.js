import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native"
import style from './style'

const AuthInput = ({value,changetext,placeholder,isPassword}) => {
    return(
        <View style={style.container}>
            <TextInput style={style.input}
            placeholder={placeholder}
            value={value}
            onChangeText={changetext}
            secureTextEntry={isPassword}
            />
        </View>
    )
}
export default AuthInput