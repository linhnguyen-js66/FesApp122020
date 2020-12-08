import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text, ScrollView, TextInput } from "react-native"
import style from './style'
import Header from '../../components/Header'
import InputTicket from '../../components/InputTicket'
import ControlPanel from '../../components/ControlPanel'
import TableComponent from '../../components/TableComponent'
import ButtonTable from '../../components/ButtonTable'
const CommandBookScreen = () => {
    const DataBKS = ['29A-15511', '29A-15123', '29B-23429']
    const tableHead = ['Vé', 'Từ số', 'Đến số', 'Số bảng','Thành Tiền']
    const tableData = [
     ['07K', '0012', '0032', '20','140000'],
     ['12K', '0010', '0030', '22','240000'],
     ['17K', '0002', '0032', '30','510000'],
     ['20K', '0002', '0005', '20','60000'],
     ['L1', '', '','10','100000'],
     ['L2', '', '','10','140000']
   ]
    return (
        <ScrollView>
            <View style={{flex:1}}>
                <Header title="Sổ cấp phát lệnh" />
                {/* InputTicket */}
                <View style={style.containInputDate_Command}>
                    <InputTicket title="Ngày" />
                    <InputTicket title="Số lệnh" index={1} />
                </View>
                {/* ControlPanelAndInput */}
                <View style={style.containControl_Input}>
                    <ControlPanel data={DataBKS} title="BKS" />
                    <View style={style.input}>
                        <InputTicket title="Lái xe" />
                    </View>
                </View>
                {/* ButtonTable */}
                <View style={style.containButton}>
                    <ButtonTable title="Bỏ qua"/>
                    <View style={style.buttonChild}>
                           <ButtonTable title="Lưu lại"/>
                    </View>
                </View>
                {/* TableComponent */}
                <TableComponent dataTableHead={tableHead} dataTableRows={tableData}/>
            </View>
        </ScrollView>
    )
}
export default CommandBookScreen