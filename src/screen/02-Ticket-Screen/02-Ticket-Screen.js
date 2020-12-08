import React, { useEffect, useState } from 'react'
import { View, ViewStyle, Text,ScrollView,TextInput } from "react-native"
import style from './style'
import InputTicket from '../../components/InputTicket'
import ControlPanel from '../../components/ControlPanel'
import ControlPanelSecond from '../../components/ControlPanelSecond'
import TableComponent from '../../components/TableComponent'
const TicketScreen = () => {
    const tableHead = ['Vé', 'Từ số', 'Đến số', 'Số bảng','Thành Tiền']
    const tableData = [
     ['07K', '0012', '0032', '20','140000'],
     ['12K', '0010', '0030', '22','240000'],
     ['17K', '0002', '0032', '30','510000'],
     ['20K', '0002', '0005', '20','60000'],
     ['L1', '', '','10','100000'],
     ['L2', '', '','10','140000']
   ]
   const DataBKS = ['29A-15511', '29A-15123', '29B-23429']
   const caculateTotal = () => {
       let temp=0
       tableData.map((items)=>{
           for(let item=0;item<items.length;item++ ){
                
           }
       })
   }
    return(
        <ScrollView>
           <View>
               <View style={style.header}>
               <Text style={style.lineone}>Thống kê vé</Text>
               </View>
               <View style={style.inputTicket}>
                   <InputTicket title="Ngày"/>
                   <InputTicket title="Lượt" index={1}/>
               </View>
               <ControlPanel title="BKS" data={DataBKS}/>
               <ControlPanelSecond title="Tuyến"/>
               <TableComponent dataTableHead={tableHead} dataTableRows={tableData}/>
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
           </View>
        </ScrollView>
    )
}
export default TicketScreen