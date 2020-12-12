import React, { useEffect, useState } from 'react'
import { View, ScrollView, Alert, TouchableOpacity, Text } from "react-native"
import style from './style'
import Header from '../../components/Header'
import InputTicket from '../../components/InputTicket'
import ControlPanel from '../../components/ControlPanel'
import ButtonTable from '../../components/ButtonTable'
import { DataTable } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
const LabelTable = () => {
    return (
        <DataTable.Header style={{ backgroundColor: '#cce6ff', marginTop: 16, marginHorizontal: 16 }}>
            <DataTable.Title>Ghi chú</DataTable.Title>
            <DataTable.Title >Thu</DataTable.Title>
            <DataTable.Title >Chi</DataTable.Title>
        </DataTable.Header>
    )
}
const ListItem = ({ data, handleClick }) => {
    const { note, type, money } = data
    const temp = ""
    return (
        <View>
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell>{note}</DataTable.Cell>
                    {type == "THU" ? <View style={{ flexDirection: 'row', flex: 1 }}>
                        <DataTable.Cell style={{ flex: 1 }}>{money}</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 1 }} >{temp}</DataTable.Cell>
                    </View> : <View>
                            <DataTable.Cell style={{ flex: 1 }}>{temp}</DataTable.Cell>
                            <DataTable.Cell style={{ flex: 1, marginLeft: 190 }}>{money}</DataTable.Cell>
                        </View>}
                    <TouchableOpacity onPress={handleClick} style={{ alignItems: 'flex-end', marginRight: 16, flex: 1 }}>
                        <Icon type="font-awesome" name="close" color="tomato" />
                    </TouchableOpacity>
                </DataTable.Row>
            </DataTable>
        </View>
    )
}

const RevenueExpenditureScreen = () => {
    const navigation = useNavigation()
    const typeData = ["THU", "CHI"]
    const [TypeData, SetTypeData] = useState(typeData[0])
    const [date, setDate] = useState('')
    const [note, setNote] = useState('')
    const [money, setMoney] = useState('')
    const [newTable, setNewTable] = useState([])
    const [refresh, setRefresh] = useState()
    const SaveDataInput = () => {
        setRefresh([])
        const result = newTable
        const findItem = newTable.findIndex((item) => item.note == note)
        if (date == '' && note == '' && money == '') {
            Alert.alert("Hãy nhập thông tin")
        }
        else {
            if (findItem < 0) {
                result.push({
                    type: TypeData,
                    note: note,
                    money: money
                })
            } else {
                result.push({
                    type: TypeData,
                    note: note,
                    money: money
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
    //total
    const totalRevenue = () => {
        let temp = 0
        newTable.map((item) => {
            if (item.type == "THU") {
                temp += Number(item.money)
            }
        })
        return temp
    }
    const totalExpenditure = () => {
        let sum = 0
        newTable.map((item) => {
            if (item.type == "CHI") {
                sum += Number(item.money)
            }
        })
        return sum
    }
    return (
        <ScrollView>
            <View style={{ marginTop: 32 }}>
                <Header title="Sổ thu chi" />
                {/* dateandtype */}
                <View style={style.containInput_Control}>
                    <View style={style.containControl}>
                        <InputTicket title="Ngày" index={2} handleChangeText={(text) => setDate(text)} />
                    </View>
                    <ControlPanel title="Loại" data={typeData} valueSelect={TypeData}
                        onClick={() => SetTypeData(TypeData)}
                        setState={SetTypeData}
                    />
                </View>
                {/* note */}
                <View style={style.note}>
                    <InputTicket title="Ghi chú" handleChangeText={(text) => setNote(text)} />
                </View>
                {/* Money */}
                <View style={style.containMoney_Button}>
                    <InputTicket title="Số tiền" handleChangeText={(text) => setMoney(text)} />
                    <View style={{ marginHorizontal: 8 }}>
                        <ButtonTable title="Bỏ qua" onClick={() => navigation.goBack()} />
                    </View>
                    <View>
                        <ButtonTable title="Lưu lại" onClick={SaveDataInput} />
                    </View>
                </View>
                {/* TableComponent */}
                <LabelTable />
                {newTable.map((item) => <ListItem data={item} key={item.note} handleClick={() => RemoveItem(item)} />)}
                {/* <View style={style.containTotal}>
                    <Text>Cộng</Text>
                    <Text>{totalRevenue()}</Text>
                    <Text>{totalExpenditure()}</Text>
                </View> */}
                <DataTable>
                    <DataTable.Row>
                        <DataTable.Cell>Cộng</DataTable.Cell>
                        <DataTable.Cell>{totalRevenue()}</DataTable.Cell>
                        <DataTable.Cell>{totalExpenditure()}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </ScrollView>
    )
}
export default RevenueExpenditureScreen