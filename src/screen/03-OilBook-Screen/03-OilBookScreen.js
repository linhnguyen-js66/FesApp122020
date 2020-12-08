import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from "react-native"
import style from './style'
import InputTicket from '../../components/InputTicket'
import ControlPanel from '../../components/ControlPanel'
import ButtonTable from '../../components/ButtonTable'
import TableComponent from '../../components/TableComponent'
const OilBookScreen = () => {
    const DataBKS = ['29A-15511', '29A-15123', '29B-23429']
    const DataCar = ['CTY', 'CÁ NHÂN']
    const tableHead = ['Vé', 'Từ số', 'Đến số', 'Số bảng', 'Thành Tiền']
    const tableData = [
        ['07K', '0012', '0032', '20', '140000'],
        ['12K', '0010', '0030', '22', '240000'],
        ['17K', '0002', '0032', '30', '510000'],
        ['20K', '0002', '0005', '20', '60000'],
        ['L1', '', '', '10', '100000'],
        ['L2', '', '', '10', '140000']
    ]
    return (
        <ScrollView>
            <View>
                <View style={style.header}>
                    <Text style={style.lineFirst}>Sổ dầu</Text>
                </View>
                <View style={style.inputTicket}>
                    <InputTicket title="Ngày" />
                    <InputTicket title="Lượt" index={1} />
                </View>
                <View style={style.ControlPanel}>
                    <ControlPanel title="BKS" data={DataBKS} index={1} />
                    <ControlPanel title="Xe" data={DataCar} index={2} />
                </View>
                <View style={style.inputTicket}>
                    <InputTicket title="Số lít" />
                    <InputTicket title="Giá" index={1} />
                    <InputTicket title="Tiền" index={1} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 16 }}>
                    <ButtonTable title="Bỏ qua" />
                    <ButtonTable title="Lưu lại" index={2} />
                </View>
                <TableComponent dataTableHead={tableHead} dataTableRows={tableData} />
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
            </View>
        </ScrollView>
    )
}
export default OilBookScreen