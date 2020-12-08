import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text, ScrollView, TextInput } from "react-native"
import style from './style'
import Header from '../../components/Header'
import InputTicket from '../../components/InputTicket'
import ControlPanel from '../../components/ControlPanel'
import TableComponent from '../../components/TableComponent'
import ButtonTable from '../../components/ButtonTable'
const RevenueExpenditureScreen = () => {
    const typeData = ["THU","HAI","BA"]
    const tableHead = ['Vé', 'Từ số', 'Đến số', 'Số bảng','Thành Tiền']
    const tableData = [
     ['07K', '0012', '0032', '20','140000'],
     ['12K', '0010', '0030', '22','240000'],
     ['17K', '0002', '0032', '30','510000'],
     ['20K', '0002', '0005', '20','60000'],
     ['L1', '', '','10','100000'],
     ['L2', '', '','10','140000']
   ]
    return(
        <ScrollView>
            <View>
                <Header title="Sổ thu chi"/>
                {/* dateandtype */}
                <View style={style.containInput_Control}>
                    <View style={style.containControl}>
                               <InputTicket title="Ngày" index={2}/>
                    </View>
                    <ControlPanel title="Loại" data={typeData}/>
                </View>
                {/* note */}
                <View style={style.note}>
                    <InputTicket title="Ghi chú"/>
                </View>
                {/* Money */}
                <View style={style.containMoney_Button}>
                        <InputTicket title="Số tiền" />
                        <View style={{marginHorizontal:8}}>
                             <ButtonTable title="Bỏ qua"/>
                        </View>
                       <View>
                           <ButtonTable title="Lưu lại"/>
                       </View>
                </View>
                {/* TableComponent */}
                <View>
                    <TableComponent dataTableHead={tableHead} dataTableRows={tableData}/>
                </View>
            </View>
        </ScrollView>
    )
}
export default RevenueExpenditureScreen