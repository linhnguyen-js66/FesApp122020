import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text, ScrollView, TextInput } from "react-native"
import style from './style'
import Header from '../../components/Header'
import ControlPanel from '../../components/ControlPanel'
import InputTicket from '../../components/InputTicket'
import TableComponent from '../../components/TableComponent'
import ButtonTable from '../../components/ButtonTable'
const FixEveryDay = () => {
    const tableHead = ['Vé', 'Từ số', 'Đến số', 'Số bảng', 'Thành Tiền']
    const tableData = [
        ['07K', '0012', '0032', '20', '140000'],
        ['12K', '0010', '0030', '22', '240000'],
        ['17K', '0002', '0032', '30', '510000'],
        ['20K', '0002', '0005', '20', '60000'],
        ['L1', '', '', '10', '100000'],
        ['L2', '', '', '10', '140000']
    ]
    const DataBKS = ['29A-15511', '29A-15123', '29B-23429']
    return (
        <ScrollView>
            <View>
                <Header title="Sửa chữa hàng ngày" />

                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <InputTicket title="Ngày" index={2}/>
                    </View>
                    <ControlPanel title="BKS" data={DataBKS} index={1} />
                </View>

                <View style={{marginTop:16,marginHorizontal:16}}>
                    <InputTicket title="Ghi chú" />
                </View>
                <View>
                    <TableComponent dataTableHead={tableHead} dataTableRows={tableData}/>
                </View>
                {/* total */}
                <View style={style.containerTotal}>
                   <View style={{flex:1}}>
                        <Text style={{alignSelf:'flex-end',fontSize:17,marginRight:32}}>Cộng:</Text>
                   </View>
                  
                   <View style={style.total}>
                       <Text style={style.caculate}>
                           1.020.000
                       </Text>
                   </View>
               </View>
               {/* button */}
               <View style={{flex:1,flexDirection:'row',marginHorizontal:16,marginTop:64}}>
                     <ButtonTable title="Bỏ qua"/>
                     <View style={{flex:1,alignItems:'flex-end'}}>
                           <ButtonTable title="Lưu lại"/>
                     </View>
               </View>
            </View>
        </ScrollView>
    )
}
export default FixEveryDay