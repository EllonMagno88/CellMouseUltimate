import { StyleSheet,} from "react-native";

const estilos = StyleSheet.create({

    PlanoDeFundo: {

        flex: 1, 
        borderWidth: 5,  
        position: 'relative',
       

    },

    PlanoDeFundo2:{

        backgroundColor: '#d9dbdaff', 
        position: 'absolute',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 0,

    },

    ViewPrincipal: {
        
        position: 'relative',
        flex: 1, 
        gap: 5, 
        zIndex: 30, 
        backgroundColor: '#252525ff', 
        marginBottom: 200,
       

    },

         TextoPrincipal: {

        textAlign: 'center', 
        color: 'white',
        marginTop: 50, 
        fontWeight: 'bold',
        fontSize: 18, 
        fontFamily: 'Tahoma', 
        textShadowColor: '#030303ff', 
        textShadowOffset: { width: -1, height: 2 }, 
        textShadowRadius: 4

         },
    
    Botoes: {

        backgroundColor: 'blue',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:40,
        marginRight:40,
        padding: 20,
        borderRadius: 5,
        zIndex: 20,
        position: 'relative',
        marginTop: 60,
        bottom: 180,
    },
    TextoBotoes: {

        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }, 

   
   

})

export default estilos