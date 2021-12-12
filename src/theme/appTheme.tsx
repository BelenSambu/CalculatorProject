import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign:'right',
        marginBottom: 10
    },
    resultSmall: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    btnText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 25,
        color: 'white',
        fontWeight: '400'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    btnOrange: {
        color: "#FF9427",
    },
    btnGray: {
        color: "#2D2D2D"
    }
});