import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Image, View, Text, TouchableOpacity,} from 'react-native'
import estilos from './estilos/Estilos'

const telaPrincipal = () => {
    const navigation = useNavigation()
    return (
        <View style={[estilos.PlanoDeFundo]}>
        <View style={[estilos.PlanoDeFundo2]}></View>

      <View style={[estilos.ViewPrincipal]}>
        <Text style={[estilos.TextoPrincipal]}>Bem-vindo ao Nosso App! Escolha como deseja controlar o Mouse!</Text>
        </View>

        <View style={[estilos.Botoes]}>
            <TouchableOpacity onPress={() => navigation.navigate('AncoragemWIFI')}> 
                <Text style={[estilos.TextoBotoes]}>Ancoragem WIFI</Text>
            </TouchableOpacity>
        </View>

         <View style={[estilos.Botoes]}>
            <TouchableOpacity onPress={() => navigation.navigate('AncoragemBluetooth')}> 
                <Text style={[estilos.TextoBotoes]}>Ancoragem Bluetooth</Text>
            </TouchableOpacity>
         </View>
        
        <View style={[estilos.Botoes]}>
            <TouchableOpacity onPress={() => navigation.navigate('AncoragemUSB')}> 
                <Text style={[estilos.TextoBotoes]}>Ancoragem USB</Text>
            </TouchableOpacity>
         </View>

         <View style={[estilos.Botoes]}>
            <TouchableOpacity onPress={() => navigation.navigate('AncoragemCelular')}> 
                <Text style={[estilos.TextoBotoes]}>Celular como Ancoragem</Text>
            </TouchableOpacity>
         </View>

        </View>
    )
}


export default telaPrincipal