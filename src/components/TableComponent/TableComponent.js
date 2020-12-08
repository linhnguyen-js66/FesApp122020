import React, { Component } from 'react';
import { View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import style from './style';
const TableComponent = ({dataTableHead,dataTableRows}) => {
   return(
       <View style={style.container}>
           <Table borderStyle={style.border}>
               <Row data={dataTableHead} style={style.head} textStyle={style.text}/>
               <Rows data={dataTableRows} textStyle={style.text}/>
           </Table>
       </View>
   )
}
export default TableComponent