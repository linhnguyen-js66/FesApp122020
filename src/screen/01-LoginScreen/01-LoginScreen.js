import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Alert } from "react-native"
import AsyncStorage from '@react-native-community/async-storage'
import style from './style'
import { useNavigation } from '@react-navigation/native';
import AuthInput from '../../components/AuthInput'
import ButtonForm from '../../components/ButtonForm'
const LoginScreen = () => {
    const [userName, setUserName] = useState('')
    const [password, setPwd] = useState('')
    const getInputUserName = (text) => {
        setUserName(text)
    }
    const getInputPassWord = (text) => {
        setPwd(text)
    }
    const navigation = useNavigation()
    //Login
    const LoginAccount = async () => {
        const account = {
            username: userName,
            password: password
        }
        const json = JSON.stringify(account)
        if (userName && password) {
            let myHeaders = new Headers();
            myHeaders.set('Accept', 'application/json');
            myHeaders.set('Content-Type', 'application/json');
            myHeaders.set('Cache-Control', 'no-cache');
            await fetch('https://fapi.fesonline.net:20901/apiConfig/users/verify', {
                method: 'POST',
                headers: myHeaders,
                body: json
            }).then(async (response) => await response.json())
                .then(async (res) => {
                    console.log(res)
                    if (res.error) {
                        Alert.alert(res.error)
                    } else {
                        AsyncStorage.setItem('jwt', json)
                        navigation.navigate('Home')
                    }
                })
                .catch(() => {
                    Alert.alert('Sai thông tin đăng nhập')
                })
                .done()
        }
        else {
            Alert.alert('Thông tin đăng nhập trống')
        }
    }
    //end

    return (
        <ScrollView>
            <View>
                <View style={style.header}>
                    <Text style={style.textHead}>PHẦN MỀM QUẢN LÝ VẬN TẢI</Text>
                    <Text style={style.underlineHead}>Công ty TNHH Vận tải và Du lịch Phúc Minh</Text>
                </View>
                <View style={style.containerInput}>
                    <AuthInput placeholder="Username" value={userName} changetext={getInputUserName} />
                    <AuthInput placeholder="Password" value={password} isPassword={true} changetext={getInputPassWord} />
                </View>
                <ButtonForm title="Login" onClick={LoginAccount} />
            </View>
        </ScrollView>
    )
}
export default LoginScreen