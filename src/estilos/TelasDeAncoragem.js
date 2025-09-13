import { StyleSheet } from "react-native";

const TelasAncoragem = StyleSheet.create({
    ViewPrincipal: {
       flex: 1,
       backgroundColor: "#0e058dff"

    },

    Switch: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        backgroundColor: '#fff',
        top: 20,
    },

    SwitchesTelaCelular: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        backgroundColor: '#fff',
        top: 60,
    },

    Textos: {
        fontSize: 18,
        fontWeight: "bold",
    },

    Touchpad: {
        flex: 1,
        backgroundColor: "#ffffffff",
        margin: 10,
        borderRadius: 10,
        top: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    TextoTouch: {
        color: "#555",
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 24, 
        opacity: 0.4,
        
    },

    ViewBotoes: {

        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
        paddingTop:20,

    },

    Botoes: {

       flex: 1,
       margin: 5,
       top: 10,
       backgroundColor: "#1976D2",
       paddingVertical: 15,
       paddingBottom: 200,
       borderRadius: 8,
       alignItems: "center",

    },

})


export default TelasAncoragem;