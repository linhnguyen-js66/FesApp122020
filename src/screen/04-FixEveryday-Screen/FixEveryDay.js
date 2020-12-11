import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text, ScrollView, TouchableOpacity,Alert } from "react-native"
import style from './style'
import Header from '../../components/Header'
import ControlPanel from '../../components/ControlPanel'
import InputTicket from '../../components/InputTicket'
import ButtonTable from '../../components/ButtonTable'
import { DataTable } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
const LabelTable = ({ title }) => {
    return (

        <DataTable.Header style={{ backgroundColor: '#cce6ff', marginTop: 16, marginHorizontal: 16 }}>
            <DataTable.Title>Vật tư nhân công</DataTable.Title>
            <DataTable.Title >Số lượng</DataTable.Title>
            <DataTable.Title >Thành tiền</DataTable.Title>
        </DataTable.Header>
    )
}
const ListItem = ({ data, handleClick }) => {
    const { vattucong, soluong, thanhtien } = data
    return (
        <View>
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell>{vattucong}</DataTable.Cell>
                    <DataTable.Cell >{soluong}</DataTable.Cell>
                    <DataTable.Cell >{thanhtien}
                        <TouchableOpacity onPress={handleClick} style={{ alignItems: 'flex-end', marginRight: 16, flex: 1 }}>
                            <Icon type="font-awesome" name="close" color="tomato" />
                        </TouchableOpacity></DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>

    )
}
const FixEveryDay = () => {
    const navigation = useNavigation()
    const DataBKS = ['29A-15511', '29A-15123', '29B-23429']
    const [dataBKS, setDataBKS] = useState(DataBKS[0])
    const [date, setDate] = useState('')
    const [note, setNote] = useState('')
    const [suppliesProduct, setSuppliseProduct] = useState('')
    const [amount, setAmount] = useState('')
    const [totalPrice, setTotalPrice] = useState('')
    const [newTable, setNewTable] = useState([])
    const [refresh, setRefresh] = useState()
    //printtable
    const SaveDataInput = () => {
        setRefresh([])
        const result = newTable
        const findItem = newTable.findIndex((item) => item.vattucong == dataBKS)
        if (date == '' && amount == '' && note == '' && totalPrice == '' && suppliesProduct == '') {
            Alert.alert("Hãy nhập thông tin")
        }
        else {
            if (findItem < 0) {
                result.push({
                    vattucong: suppliesProduct,
                    soluong: amount,
                    thanhtien: totalPrice
                })
            } else {
                result.push({
                    vattucong: suppliesProduct,
                    soluong: amount,
                    thanhtien: totalPrice
                })
            }
        }
        setNewTable(result)
    }
    //remove
    const RemoveItem = (item) => {
        setRefresh([])
        let resultItem = newTable
        resultItem = resultItem.filter(value => value !== item)
        setNewTable(resultItem)
    }
    //caculate total
    const caculateTotal = () => {
        let temp = 0
        newTable.map((item) => {
            temp += Number(item.thanhtien)
        })
        return temp
    }
    return (
        <ScrollView>
            <View style={{ marginTop: 32 }}>
                <Header title="Sửa chữa hàng ngày" />

                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <InputTicket title="Ngày" index={2} handleChangeText={(text) => setDate(text)} />
                    </View>
                    <ControlPanel title="BKS" data={DataBKS} index={1}
                        valueSelect={dataBKS}
                        onClick={() => setDataBKS(dataBKS)}
                        setState={setDataBKS}
                    />
                </View>

                <View style={{ marginTop: 16, marginHorizontal: 16 }}>
                    <InputTicket title="Ghi chú" handleChangeText={(text) => setNote(text)} />
                </View>
                <View style={{ marginTop: 16, marginHorizontal: 16 }}>
                    <InputTicket title="Vật tư nhân công" handleChangeText={(text) => setSuppliseProduct(text)} />
                </View>
                <View style={style.controlType}>
                    <InputTicket title="Số lượng" handleChangeText={(text) => setAmount(text)} />
                    <InputTicket title="Thành tiền" index={1} handleChangeText={(text) => setTotalPrice(text)} />
                </View>
                {/* table */}
                <LabelTable />
                {newTable.map((item) => <ListItem key={item.vattucongRTTt} data={item} handleClick={() => RemoveItem(item)} />)}
                {/* total */}
                <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 16 }}>
                    <Text style={{ flex: 1, fontSize: 17, fontWeight: 'bold' }}>Cộng: {caculateTotal()} </Text>
                </View>
                {/* button */}
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 16, marginTop: 64 }}>
                    <ButtonTable title="Bỏ qua" onClick={()=>navigation.goBack()}/>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <ButtonTable title="Lưu lại" onClick={SaveDataInput} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default FixEveryDay