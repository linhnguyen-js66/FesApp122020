import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth:0.5,
        padding:12,
        marginRight:16
    },
    // componentContainerOpen: {
    //     borderRadius: 12,
    //     top: -4,
    //     borderWidth: 0.7,
    //     borderColor: 'gray'
    // },
    // chooseItemContainer: {
    //     paddingLeft: 12,
    //     paddingVertical: 12,
    //     borderBottomWidth: 0.7,
    //     borderColor: 'gray',
    // },
    selectedValueText: { color: 'black', paddingLeft: 12 },
    expandButton: { position: "absolute", right: 12 },

})