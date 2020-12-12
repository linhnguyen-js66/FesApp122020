import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native"
import style from './style'
import Header from '../../components/Header'
import InputTicket from '../../components/InputTicket'
import ControlPanel from '../../components/ControlPanel'
import ButtonTable from '../../components/ButtonTable'
import { DataTable } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
const LabelTable = ({ title }) => {
    return (
        <DataTable.Header style={{ backgroundColor: '#cce6ff', marginTop: 16, marginHorizontal: 16 }}>
            <DataTable.Title>BKS</DataTable.Title>
            <DataTable.Title >Số lệnh</DataTable.Title>
            <DataTable.Title >Lái xe</DataTable.Title>
        </DataTable.Header>
    )
}
const ListItem = ({ data, handleClick }) => {
    const { bks, solenh, laixe } = data
    return (
        <View>
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell>{bks}</DataTable.Cell>
                    <DataTable.Cell >{solenh}</DataTable.Cell>
                    <DataTable.Cell >{laixe}
                        <TouchableOpacity onPress={handleClick} style={{ alignItems: 'flex-end', marginRight: 16, flex: 1 }}>
                            <Icon type="font-awesome" name="close" color="tomato" />
                        </TouchableOpacity>
                    </DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>

    )
}
const CommandBookScreen = () => {
    const navigation = useNavigation()
    const DataBKS = ['29A-15511', '29A-15123', '29B-23429']
    const [dataBKS, setDataBKS] = useState(DataBKS[0])
    const [date, setDate] = useState('')
    const [command, setCommand] = useState('')
    const [name, setName] = useState('')
    const [newTable, setNewTable] = useState([])
    const [refresh, setRefresh] = useState()
    const SaveDataInput = () => {
        setRefresh([])
        const result = newTable
        const findItem = newTable.findIndex((item) => item.laixe == name)
        if (date == '' && command == '' && name == '') {
            Alert.alert("Hãy nhập thông tin")
        }
        else {
            if (findItem < 0) {
                result.push({
                    bks: dataBKS,
                    laixe: name,
                    solenh: command
                })
            } else {
               Alert.alert("Thông tin đã được nhập")
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
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Header title="Sổ cấp phát lệnh" />
                {/* InputTicket */}
                <View style={style.containInputDate_Command}>
                    <InputTicket title="Ngày" handleChangeText={(text) => setDate(text)} />
                    <InputTicket title="Số lệnh" index={1} handleChangeText={text => setCommand(text)} />
                </View>
                {/* ControlPanelAndInput */}
                <View style={style.containControl_Input}>
                    <ControlPanel title="BKS" data={DataBKS}
                        index={1}
                        valueSelect={dataBKS}
                        onClick={() => setDataBKS(dataBKS)}
                        setState={setDataBKS} />
                    <View style={style.input}>
                        <InputTicket title="Lái xe" handleChangeText={text => setName(text)} />
                    </View>
                </View>
                {/* ButtonTable */}
                <View style={style.containButton}>
                    <ButtonTable title="Bỏ qua" onClick={()=>navigation.goBack()}/>
                    <View style={style.buttonChild}>
                        <ButtonTable title="Lưu lại" onClick={SaveDataInput} />
                    </View>
                </View>
                {/* TableComponent */}
                <LabelTable />
                {
                    newTable.map((item) => <ListItem data={item} handleClick={() => RemoveItem(item)} />)
                }
            </View>
        </ScrollView>
    )
}
export default CommandBookScreen