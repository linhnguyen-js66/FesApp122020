import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Alert,TouchableOpacity } from "react-native"
import style from './style'
import InputTicket from '../../components/InputTicket'
import ControlPanel from '../../components/ControlPanel'
import ButtonTable from '../../components/ButtonTable'
import { DataTable } from 'react-native-paper'
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
const LabelTable = ({ title }) => {
    return (
        <DataTable.Header style={{ backgroundColor: '#cce6ff', marginTop: 16,marginHorizontal:16}}>
            <DataTable.Title>BKS</DataTable.Title>
            <DataTable.Title >Số lít</DataTable.Title>
            <DataTable.Title >Giá</DataTable.Title>
            <DataTable.Title>Thành tiền</DataTable.Title>
            <DataTable.Title>Giờ đổ</DataTable.Title>
        </DataTable.Header>
    )
}
const ListItem = ({ data, handleClick }) => {
    const { bks,litdau,gia,thanhtien,giodo} = data
    return (
        <View>
            <DataTable>
                <DataTable.Row>
                    <DataTable.Cell>{bks}</DataTable.Cell>
                    <DataTable.Cell >{litdau}</DataTable.Cell>
                    <DataTable.Cell >{gia}0</DataTable.Cell>
                    <DataTable.Cell >{thanhtien}</DataTable.Cell>
                    <DataTable.Cell >{giodo}
                        <TouchableOpacity onPress={handleClick} style={{ alignItems: 'flex-end', marginRight: 16, flex: 1 }}>
                            <Icon type="font-awesome" name="close" color="tomato" />
                        </TouchableOpacity></DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>

    )
}
const OilBookScreen = () => {
    const navigation = useNavigation()
    const DataBKS = ['29A-15511', '29A-15123', '29B-23429']
    const DataCar = ['CTY', 'CÁ NHÂN']
    const [dataBKS,setDataBKS] = useState(DataBKS[0])
    const [dataCar,setDataCar] = useState(DataCar[0])
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')
    const [literOil,setLiterOil] = useState('')
    const [price,setPrice] = useState('')
    const [totalPrice,setTotalPrice] = useState('')
    const [newTable,setNewTable]= useState([])
    const [refresh,setRefresh] = useState()
    const SaveDataInput = ()=>{
        setRefresh([])
        const result = newTable 
        const findItem = newTable.findIndex((item)=>item.bks == dataBKS)
        if(date == '' && time == '' && literOil=='' && price=='' && totalPrice=='')
        {
            Alert.alert("Hãy nhập thông tin")
        }
        else{
            if(findItem < 0 ){
                result.push({
                    bks:dataBKS,
                    litdau:literOil,
                    gia:price,
                    giodo:time,
                    thanhtien:totalPrice
                })
            }else{
                result.push({
                    bks:dataBKS,
                    litdau:literOil,
                    gia:price,
                    giodo:time,
                    thanhtien:totalPrice
                })
            }
        }
        setNewTable(result)
    } 
    //total and remove
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
            <View>
                <View style={style.header}>
                    <Text style={style.lineFirst}>Sổ dầu</Text>
                </View>
                <View style={style.inputTicket}>
                    <InputTicket title="Ngày"  handleChangeText={(text)=>setDate(text)}/>
                    <InputTicket title="Giờ đổ" index={1} handleChangeText={(text)=>setTime(text)}/>
                </View>
                <View style={style.ControlPanel}>
                    <ControlPanel title="BKS" data={DataBKS} 
                    index={1} 
                    valueSelect={dataBKS}
                    onClick={()=>setDataBKS(dataBKS)}
                    setState={setDataBKS}
                    />
                    <ControlPanel title="Xe" data={DataCar}
                     index={2} 
                     valueSelect={dataCar}
                     onClick={()=>setDataCar(dataCar)}
                     setState={setDataCar}
                     />
                </View>
                <View style={style.inputTicket}>
                    <InputTicket title="Số lít" handleChangeText={(text)=>setLiterOil(text)}/>
                    <InputTicket title="Giá" index={1} handleChangeText={(text)=>setPrice(text)}/>
                    <InputTicket title="Tiền" index={1} handleChangeText={(text)=>setTotalPrice(text)}/>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 16 }}>
                    <ButtonTable title="Bỏ qua" onClick={()=>navigation.goBack()}/>
                    <ButtonTable title="Lưu lại" index={2} onClick={SaveDataInput}/>
                </View>
                {/* table */}
                <LabelTable/>
                {
                    newTable.map((item)=> <ListItem data={item} key={item.bks} handleClick={()=>RemoveItem(item)}/>)
                }
                 
            </View>
        </ScrollView>
    )
}
export default OilBookScreen