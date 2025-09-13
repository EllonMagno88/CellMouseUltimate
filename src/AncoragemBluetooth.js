import React, { useState } from "react";
import { View, Text, TouchableOpacity, PanResponder, Switch } from "react-native";
import TelasAncoragem from './estilos/TelasDeAncoragem'

const AncoragemBluetooth = () => {
    const [ativo, setAtivo] = useState(false);

    return (
        <View style={[TelasAncoragem.ViewPrincipal]}>
            
        <View style={[TelasAncoragem.Switch]}>
        <Text style={[TelasAncoragem.Textos]}>Ativar Ancoragem Bluetooth</Text>
        <Switch 
            value={ativo}
            onChangeValue={setAtivo}/>
        </View>

        <View style={[TelasAncoragem.Touchpad]}>
            <Text style={[TelasAncoragem.TextoTouch]}>Touchpad</Text>
        </View>

        <View style={[TelasAncoragem.ViewBotoes]}>

        <TouchableOpacity style={[TelasAncoragem.Botoes]}></TouchableOpacity>
        <TouchableOpacity style={[TelasAncoragem.Botoes]}></TouchableOpacity>

        </View>


        </View>
    )

}

export default AncoragemBluetooth