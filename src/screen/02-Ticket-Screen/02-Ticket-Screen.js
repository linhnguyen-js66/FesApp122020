import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text, ScrollView, TextInput, Alert } from "react-native"
import style from './style'
import InputTicket from '../../components/InputTicket'
import ControlPanel from '../../components/ControlPanel'
import ControlPanelSecond from '../../components/ControlPanelSecond'
import TableComponent from '../../components/TableComponent'
import ButtonTable from '../../components/ButtonTable'
import { TouchableOpacity } from 'react-native-gesture-handler'
const TicketScreen = () => {
    const tableHead = ['Vé', 'Từ số', 'Đến số', 'Số bảng', 'Thành Tiền']
    const DataBKS = ['29A-15511', '29A-15123', '29B-23429']
    const testData = [
        ['07K', '', '', '', ''],
        ['12K', '', '', '', ''],
        ['17K', '', '', '', ''],
        ['20K', '', '', '', ''],
        ['L1', '', '', '', ''],
        ['L2', '', '', '', '']
    ]
    //input table
    // const [index1, settIndex1] = useState(0)
    // const [index2, settIndex2] = useState(0)
    // const [index3, settIndex3] = useState(0)
    // const InputCellIndexOne = (text) => {
    //     settIndex1(text)
    // }
    // const InputCellIndexTwo = (text) => {
    //     settIndex2(text)
    // }
    // const InputCellIndexThree = (text) => {
    //     settIndex3(text)
    // }
    const element = (data, index) => (
        <TouchableOpacity>
            <TextInput style={style.input} />
        </TouchableOpacity>
    )
    return (
        <ScrollView>
            <View>
                <View style={style.header}>
                    <Text style={style.lineone}>Thống kê vé</Text>
                </View>
                {/* inputDate */}
                <View style={style.inputTicket}>
                    <InputTicket title="Ngày" />
                    <InputTicket title="Lượt" index={1} />
                </View>
                {/* controlPanelBKS-Tuyen */}
                <View style={style.containControl}>
                    <ControlPanel title="BKS" data={DataBKS} />
                    <ControlPanelSecond title="Tuyến" />
                </View>
                {/* Table */}
                <View style={style.table}>
                    <TableComponent dataTableHead={tableHead} dataTableRows={testData} element={element}/>
                </View>
                {/* total */}
                <View style={style.containerTotal}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ alignSelf: 'flex-end', fontSize: 17, marginRight: 32 }}>Cộng:</Text>
                    </View>
                    <View style={style.total}>
                        <Text style={style.caculate}>
                            1.020.000
                       </Text>
                    </View>
                </View>
                {/* button */}
                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 16, marginTop: 32 }}>
                    <ButtonTable title="Bỏ qua" />
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <ButtonTable title="Lưu lại" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default TicketScreen