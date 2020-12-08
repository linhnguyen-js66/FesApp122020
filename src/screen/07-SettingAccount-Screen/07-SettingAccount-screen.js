import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from "react-native"

import style from './style'
import AuthInput from '../../components/AuthInput'
import ButtonForm from '../../components/ButtonForm'

const SettingAccountScreen = ({ route }) => {
    //route params datauser
    const { dataUser } = route.params

    //getData from API

    const [data, setData] = useState([])
    const getDataFromAPI = async () => {
        let myHeaders = new Headers();
        myHeaders.set('Accept', 'application/json');
        myHeaders.set('Content-Type', 'application/json');
        myHeaders.set('Cache-Control', 'no-cache');
        await fetch('https://fapi.fesonline.net:20901/apiConfig/users/verify', {
            method: 'POST',
            headers: myHeaders,
            body: dataUser
        }).then(async (response) => await response.json())
            .then(async (res) => {
                console.log(res)
                const result = []
                result.push(res)
                setData(result)
            })
            .catch((error) => {
                console.error(error)
            })
            .done()
    }
    useEffect(() => { getDataFromAPI() }, [])

    return (
        <ScrollView>
            <View style={style.containAll}>
                <Text style={style.textHeader}>Thông tin tài khoản</Text>
                {data.map((item) => {
                    const { TEN, MA } = item
                    return <View style={style.container}>
                        <Text key={TEN} style={style.name}>Tên: {TEN} Mã: {MA}</Text>
                    </View>
                })}
                <View style={style.container}>
                    <View style={style.changePassword}>
                        <Text style={{ fontSize: 17, marginBottom: 16 }}>Đổi mật khẩu</Text>
                        <AuthInput placeholder="Mật khẩu mới" />
                        <View style={{ marginTop: 16 }}>
                            <ButtonForm title="Thay đổi" />
                        </View>

                    </View>

                </View>
            </View>
        </ScrollView>
    )
}
export default SettingAccountScreen