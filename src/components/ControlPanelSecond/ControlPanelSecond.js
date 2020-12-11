import React, { useEffect, useState } from 'react'
import { View,Text, TouchableOpacity } from "react-native"
import style from './style'
import { Icon } from 'react-native-elements'
const ControlPanelSecond = ({ title,Data }) => {
    
    const [valueSelect, setValueSelect] = useState(Data[0])
    const [openList, setOpenList] = useState(false)
    return (
        <View style={{ flex: 1, flexDirection: 'row',marginTop:16}}>
            <Text style={{ marginLeft: 16, fontSize: 17,width:55}}>{title}</Text>
            <View style={style.container}>

                {openList ? (
                    <View style={style.componentContainerOpen}>
                        <TouchableOpacity
                            style={style.chooseItemContainer}
                            onPress={() => {
                                setValueSelect(valueSelect), setOpenList(false)
                            }}
                        >
                            <Text style={{ color: 'black', fontSize: 17 }}>{valueSelect}</Text>
                        </TouchableOpacity>
                        {Data.map((title) => {
                            if (title !== valueSelect) {
                                return (
                                    <TouchableOpacity
                                        key={title}
                                        style={{
                                            paddingVertical: 4
                                        }}
                                        onPress={() => {
                                            setValueSelect(title),
                                                setOpenList(false)
                                        }}
                                    >
                                        <Text style={{ color: 'black', fontSize: 17 }}>{title}</Text>
                                    </TouchableOpacity>
                                )
                            } else return null
                        })}
                    </View>
                ) : (

                        <Text style={{ color: 'black', fontSize: 17 }}>{valueSelect}</Text>


                    )}
                {/* Expand Button Icon */}
                <View style={{flexDirection:'row', marginHorizontal:4,justifyContent:'flex-end',flex:1}}>
                    <Icon
                        name="angle-down"
                        type="font-awesome-5"
                        size={15}
                        color='grey'
                        onPress={() => (openList ? setOpenList(false) : setOpenList(true))}
                    />
                </View>
            </View>
        </View>

    )
}

export default ControlPanelSecond