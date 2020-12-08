import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, Alert } from "react-native"
import style from './style'
import AsyncStorage from '@react-native-community/async-storage'
import ButtonTable from '../../components/ButtonTable'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
const HomeScreen = () => {
    const navigation = useNavigation()

    const onClickLogOut = async () => {
        await AsyncStorage.removeItem('jwt')
        Alert.alert('Log out')
        navigation.navigate('Login')
    }
    const [dataUser, setData] = useState()
    const getStore = async () => {
        try {
            const get = await AsyncStorage.getItem('jwt')
            console.log(get)
            setData(get)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => { getStore() }, [])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../Image/background.jpg')} style={style.image}>

                <TouchableOpacity style={style.setting} onPress={() => navigation.navigate('Account', {
                    dataUser
                })}>
                    <Icon name="settings" type="ionicons" size={30} />
                    <Text style={style.text}>Thiết lập tài khoản</Text>
                </TouchableOpacity>

                <View style={style.header}>
                    <Text style={style.textlineOne}>PHẦN MỀM QUẢN LÝ VẬN TẢI</Text>
                    <Text style={style.textlineTwo}>Công ty TNHH Vận tải và Du lịch Phúc Minh</Text>
                </View>
                <View style={style.buttonOne}>
                    <View style={style.buttonChild}>
                        <ButtonTable title="Thống kê vé" onClick={() => navigation.navigate('Ticket')} />
                    </View>
                    <ButtonTable title="Sổ dầu" onClick={() => navigation.navigate('Oilbook')} />
                </View>
                <View style={style.buttonOne}>
                    <View style={style.buttonChild}>
                        <ButtonTable title="Sửa chữa" onClick={() => navigation.navigate('Fix')} />
                    </View>

                    <ButtonTable title="Sổ thu chi" onClick={() => navigation.navigate('Revenue')} />
                </View>
                <View style={style.buttonOne}>
                    <View style={style.buttonChild}>
                        <ButtonTable title="Sổ cấp phát" onClick={() => navigation.navigate('Command')} />
                    </View>
                    <ButtonTable title="Đăng xuất" onClick={onClickLogOut} />

                </View>
            </ImageBackground>
        </View>
    )
}
export default HomeScreen