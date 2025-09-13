import React, { useState } from "react";
import { View, Text, TouchableOpacity, PanResponder, Switch } from "react-native";
import TelasAncoragem from './estilos/TelasDeAncoragem'

const AncoragemCelular = () => {
    const [ativo, setAtivo] = useState(false);

    return (
        <View style={[TelasAncoragem.ViewPrincipal]}>
            
        <View style={[TelasAncoragem.SwitchesTelaCelular]}>
        <Text style={[TelasAncoragem.Textos]}>Ancorar por Wifi</Text>
        <Switch 
        value={ativo}
        onChangeValue={setAtivo}/>

        <Text style={[TelasAncoragem.Textos]}>Ancorar por Bluetooth</Text>
        <Switch 
        value={ativo}
        onChangeValue={setAtivo}/>              
        

        <Text style={[TelasAncoragem.Textos]}>Ancorar por USB</Text>
        <Switch 
        value={ativo}
        onChangeValue={setAtivo}/>              
        
        </View>

        <View style={[TelasAncoragem.ViewBotoes]}>

        <TouchableOpacity style={[TelasAncoragem.Botoes]}></TouchableOpacity>
        <TouchableOpacity style={[TelasAncoragem.Botoes]}></TouchableOpacity>

        </View>


        </View>
    )

}

export default AncoragemCelular