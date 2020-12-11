import React from 'react';
import { View, TextInput, TouchableOpacity,Text,Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import style from './style';
const TableComponent = ({dataTableHead,dataTableRows,handleInput}) => {
  const element = (data, index) => (
    <TouchableOpacity>
      <View style={style.btn}>
        <TextInput onChangeText={handleInput}/>
      </View>
    </TouchableOpacity>
  );
   return(
       <View style={style.container}>
           <Table borderStyle={style.border}>
               <Row data={dataTableHead} style={style.head} textStyle={style.text}/>
               {
                       dataTableRows.map((rowData, index) => (
                        <TableWrapper key={index} style={style.row}>
                          {
                            rowData.map((cellData, cellIndex) => (
                              <Cell key={cellIndex} data={cellData==="" ? element(cellData,index) : cellData}
                              textStyle={style.text} />
                            ))
                          }
                        </TableWrapper>
                      ))
                    }
               {/* <Rows data={dataTableRows} textStyle={style.text}/> */}
           </Table>
       </View>
   )
}
export default TableComponent