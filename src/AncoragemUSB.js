import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, PanResponder, Switch } from "react-native";
import TelasAncoragem from './estilos/TelasDeAncoragem'
import io from "socket.io-client"

const AncoragemUSB = () => {
    const [ativo, setAtivo] = useState(false);
    const socketRef = useRef(null);

    // Inicializa a conexão quando o switch for ativado
    const toggleUSB = (value) => {
        setAtivo(value);

        if (value) {
            
            socketRef.current = io("http://192.168.0.4:5000"); 
        } else {
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
        }
    };

    // PanResponder para capturar gestos do "touchpad"
    const panResponder = useRef(
        PanResponder.create({
            //Enquanto houve movimento no TouchPad, o PanResponder está ativo
            onMoveShouldSetPanResponder: () => ativo,
            onPanResponderMove: (evt, gestureState) => {
                if (socketRef.current) {
                    socketRef.current.emit("mouse_move", {
                        dx: gestureState.dx,
                        dy: gestureState.dy
                    });
                }
            },
            //Quando o movimento para, o evento mouse_stop é emitido, parando o movimento do ponteiro
            onPanResponderRelease: () => {
                if (socketRef.current) {
                    socketRef.current.emit("mouse_stop");
                }
            }
        })
    ).current;

    return (
        <View style={[TelasAncoragem.ViewPrincipal]}>
            
            <View style={[TelasAncoragem.Switch]}>
                <Text style={[TelasAncoragem.Textos]}>Ativar Ancoragem USB</Text>
                <Switch 
                    value={ativo}
                    onValueChange={toggleUSB}/>
            </View>

            <View 
                style={[TelasAncoragem.Touchpad]}
                {...panResponder.panHandlers}
            >
                <Text style={[TelasAncoragem.TextoTouch]}>Touchpad</Text>
            </View>

            <View style={[TelasAncoragem.ViewBotoes]}>
                <TouchableOpacity 
                    style={[TelasAncoragem.Botoes]} 
                    onPress={() => socketRef.current?.emit("mouse_click", { button: "left" })}
                >
                    <Text>Left</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[TelasAncoragem.Botoes]} 
                    onPress={() => socketRef.current?.emit("mouse_click", { button: "right" })}
                >
                    <Text>Right</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AncoragemUSB;
