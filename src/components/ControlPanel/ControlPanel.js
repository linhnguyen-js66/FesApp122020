import React, { useEffect, useState } from 'react'
import { View,Text, TouchableOpacity } from "react-native"
import style from './style'
import { Icon } from 'react-native-elements'

const ControlPanel = ({title,data,index,valueSelect,onClick,setState}) => {
    const [openList, setOpenList] = useState(false)
    return (
        <View style={[{ flex: 1, flexDirection: 'row'},index==2 && {marginLeft:8}]}>
            <Text style={{ marginLeft: 16, fontSize: 17,width:55}}>{title}</Text>
            <View style={[style.container,index==1 && {paddingHorizontal:4}]}>

                {openList ? (
                    <View style={style.componentContainerOpen}>
                        <TouchableOpacity
                            style={style.chooseItemContainer}
                            onPress={() => {
                               onclick(), setOpenList(false)
                            }}
                        >
                            <Text style={{ color: 'black', fontSize: 17 }}>{valueSelect}</Text>
                        </TouchableOpacity>
                        {data.map((item) => {
                            if (item !== valueSelect) {
                                return (
                                    <TouchableOpacity
                                        key={item}
                                        style={{
                                            paddingVertical: 4
                                        }}
                                        onPress={() => {
                                                setState(item),
                                                setOpenList(false)
                                        }}
                                    >
                                        <Text style={{ color: 'black', fontSize: 17 }}>{item}</Text>
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
export default ControlPanel