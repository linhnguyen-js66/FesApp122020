import React, { useState } from 'react'
import { View, Text, ScrollView, Alert, TouchableOpacity } from "react-native"
import style from './style'
import InputTicket from '../../components/InputTicket'
import ControlPanel from '../../components/ControlPanel'
import ButtonTable from '../../components/ButtonTable'
import { Icon, Header } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { DataTable } from 'react-native-paper';
const LabelTable = ({ title }) => {
    return (

        <DataTable.Header style={{ backgroundColor: '#cce6ff', marginTop: 16,marginHorizontal:16}}>
            <DataTable.Title>Vé</DataTable.Title>
            <DataTable.Title >Từ số</DataTable.Title>
            <DataTable.Title >Đến số</DataTable.Title>
            <DataTable.Title>Số lượng</DataTable.Title>
            <DataTable.Title>Thành tiền</DataTable.Title>
        </DataTable.Header>
    )
}
const ListItem = ({ data, handleClick }) => {
    const { loaive, tuso, denso, soluong, Thanhtien } = data
    return (
        <View>
            <DataTable style={{marginHorizontal:8}}>
                <DataTable.Row>
                    <DataTable.Cell>{loaive}</DataTable.Cell>
                    <DataTable.Cell >{tuso}</DataTable.Cell>
                    <DataTable.Cell >{denso}</DataTable.Cell>
                    <DataTable.Cell >{soluong}</DataTable.Cell>
                    <DataTable.Cell >{Thanhtien}
                        <TouchableOpacity onPress={handleClick} style={{ alignItems: 'flex-end', marginRight: 16, flex: 1 }}>
                            <Icon type="font-awesome" name="close" color="tomato" />
                        </TouchableOpacity></DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>

    )
}
const TicketScreen = () => {
    const navigation = useNavigation()
    const tableHead = ['Vé', 'Từ số', 'Đến số', 'Số bảng', 'Thành Tiền']
    const DataBKS = ['29A-15511', '29A-15123', '29B-23429']
    const TypeTicket = ["07K", "12K", "17K", "20K", "L1", "L2"]
    const DataTuyen = ['Tế tiêu-Mỹ Đình', 'Mỹ Đình-Tế Tiêu', 'Hợp Đồng']
    // input table
    //test 
    const [dataBKS, setDataBKS] = useState(DataBKS[0])
    const [dataTuyen, setDataTuyen] = useState(DataTuyen[0])
    const [typeTicket, setTypeTicket] = useState(TypeTicket[0])
    const [date, setDate] = useState('')
    const [inTurn, setInturn] = useState('')
    const [toNumber, setToNumber] = useState('')
    const [fromNumber, setFromNumber] = useState('')
    const [amount, setAmount] = useState('')
    const [total, setTotal] = useState('')
    const [newList, setNewList] = useState([])
    const [refresh, setRefresh] = useState([])
    const SaveDataInput = () => {
        setRefresh([])
        let result = newList
        const findItem = result.findIndex((item) => item.loaive == typeTicket)
        if (date == "" && inTurn == "") {
            Alert.alert("Hãy nhập thông tin")
        }
        else {
            if (findItem < 0) {
                result.push({
                    loaive: typeTicket,
                    tuso: toNumber,
                    denso: fromNumber,
                    soluong: amount,
                    Thanhtien: total
                })
            } else {
                result.push({
                    loaive: typeTicket,
                    tuso: toNumber,
                    denso: fromNumber,
                    soluong: amount,
                    Thanhtien: total
                })
            }
        }
        setNewList(result)
    }
    console.log('print:', newList)
    const RemoveItem = (item) => {
        setRefresh([])
        let resultItem = newList
        resultItem = resultItem.filter(value => value !== item)
        setNewList(resultItem)
    }
    //caculate total
    const caculateTotal = () => {
        let temp = 0
        newList.map((item) => {
            temp += Number(item.Thanhtien)
        })
        return temp
    }
    let sum = caculateTotal()
    const SaveData = async () => {
        const newObj = {
            detailReport: newList,
            time: date,
            turn: inTurn,
            sum: sum
        }
        const json = JSON.stringify(newObj)
        if (date == "" && inTurn == "") {
            Alert.alert("Thông tin còn thiếu")
        }
        else {
            await AsyncStorage.setItem('report', json)
            Alert.alert("Gửi dữ liệu thành công")
            setDate()
            setInturn()
            setToNumber()
            setFromNumber()
            setAmount()
            setTotal()
            setNewList([])
        }
    }

    return (
        <ScrollView>
            <View>
                <View style={style.header}>
                    <Text style={style.lineone}>Thống kê vé</Text>
                </View>
                {/* inputDate */}
                <View style={style.inputTicket}>
                    <InputTicket title="Ngày" handleChangeText={(text) => setDate(text)}
                        value={date}
                    />
                    <InputTicket title="Lượt" index={1} handleChangeText={(text) => setInturn(text)}
                        value={inTurn}
                    />
                </View>
                {/* controlPanelBKS-Tuyen */}
                <View style={style.containControl}>

                    <ControlPanel title="BKS" data={DataBKS}
                        valueSelect={dataBKS}
                        onClick={() => setDataBKS(dataBKS)}
                        setState={setDataBKS} />

                    <ControlPanel title="Tuyến" data={DataTuyen}
                        valueSelect={dataTuyen}
                        onClick={() => setDataTuyen(dataTuyen)}
                        setState={setDataTuyen}
                    />
                </View>
                {/* test */}
                <ControlPanel title="Loại vé" data={TypeTicket}
                    valueSelect={typeTicket}
                    onClick={() => setTypeTicket(typeTicket)}
                    setState={setTypeTicket}
                />
                <View style={style.controlType}>
                    <InputTicket title="Từ số" handleChangeText={(text) => setToNumber(text)}
                        value={toNumber} />
                    <InputTicket title="Đến số" index={1} handleChangeText={(text) => setFromNumber(text)}
                        value={fromNumber} />
                </View>
                <View style={style.controlType}>
                    <InputTicket title="Số lượng" handleChangeText={(text) => setAmount(text)}
                        value={amount} />
                    <InputTicket title="Thành tiền" index={1} handleChangeText={(text) => setTotal(text)}
                        value={total}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', marginTop: 16 }}>
                    <ButtonTable title="Thêm" onClick={SaveDataInput} />
                </View>
                <LabelTable />
                {newList.map((item) => {
                    return <ListItem data={item} key={item.typeTicket} handleClick={() => RemoveItem(item)} />
                })}
                <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 16 }}>
                    <Text style={{ flex: 1, fontSize: 17, fontWeight: 'bold' }}>Cộng: {caculateTotal()}</Text>
                </View>
                {/* button */}
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 16, marginTop: 32 }}>
                    <ButtonTable title="Bỏ qua" onClick={() => navigation.goBack()} />
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <ButtonTable title="Lưu lại" onClick={SaveData} />
                    </View>
                </View>
                {/* test */}

            </View>

        </ScrollView>
    )
}
export default TicketScreen