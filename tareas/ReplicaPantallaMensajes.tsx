import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function MensajesPantalla() {
    const messages = [
    {
        icon: "A",
        iconColor: "#fbc02d",
        name: "2323",
        text: "Telcel ADELANTA SALDO. Responde sí a este mensaje y recibe $5 de saldo que se descontará de tu siguiente recarga.",
        time: "6:52 a.m.",
        notification: 16,
        },
        {
        icon: "U",
        iconColor: "#ff9800",
        name: "UNOTV.COM",
        text: "DESAPARECEN 7 JÓVENES EN OAXACA:\nPODRÍAN SER MÁS/AS A LA CASA DE EMPEÑO:\nLEE ESTO ANTES/NI EL CHAVO...",
        time: "mar",
        notification: 13,
        },
        {
        icon: "T",
        iconColor: "#03a9f4",
        name: "Telcel: Paquetes - Recargas",
        text: "Si lo prefieres, ingresa al sitio web\ndando clic aquí: compraspda.telcel.com/ar",
        time: "mar",
        notification: 15,
        },
        {
        icon: "T",
        iconColor: "#e91e63",
        name: "TELCEL",
        text: "Recarga Paq Amigo Sin Límite 50 en pqtmex.telcel.com/?cv=f9, con 400 MB para navegar por 7 días con WH...",
        time: "dom",
        notification: 4,
        },
        {
        icon: "M",
        iconColor: "#4caf50",
        name: "Microsoft",
        text: "5072 is your Microsoft account verification code.",
        time: "mié",
        notification: 1,
        },
        {
        icon: "G",
        iconColor: "#9c27b0",
        name: "Gemini",
        text: "Hola, soy Gemini en Mensajes de Google. Chatea conmigo para redactar mensajes, intercambiar ideas, planificar eventos o...",
        time: "29 dic",
        notification: 1,
        },
    ];

    return (
        <View style={estilo.contenedor}>
            {/* Encabezado */}
            <View style={estilo.header}>
                <Image source={require("./imagenes/google.png")} style={estilo.logo} />
                <Text style={estilo.headerTitle}>Mensajes</Text>
                <Image source={require("./imagenes/lupa.webp")} style={estilo.icono} />
                <Image source={require("./imagenes/perfil.jpg")} style={estilo.perfil} />
            </View>

            {/* Lista de mensajes */}
            <ScrollView style={estilo.messageList}>
                {messages.map((msg, index) => (
                    <View key={index} style={estilo.message}>
                        <View style={[estilo.icon, { backgroundColor: msg.iconColor }]}>
                            <Text style={estilo.iconText}>{msg.icon}</Text>
                        </View>
                        <View style={estilo.messageContent}>
                            <Text style={estilo.name}>{msg.name}</Text>
                            <Text style={estilo.text}>{msg.text}</Text>
                        </View>
                        <View style={estilo.details}>
                            <Text style={estilo.time}>{msg.time}</Text>
                            <View style={estilo.notificationContainer}>
                                <Text style={estilo.notification}>{msg.notification}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Botones flotantes */}
            <View style={estilo.floatingButtons}>
                <Image source={require("./imagenes/rombo.png")} style={estilo.floatingButton} />
                <Image source={require("./imagenes/mensaje.webp")} style={estilo.floatingButton} />
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "#121212", // Fondo oscuro
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#1F1F1F", // Fondo del encabezado oscuro
        elevation: 3,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    headerTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF", // Texto en blanco
    },
    icono: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
    },
    perfil: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    messageList: {
        flex: 1,
    },
    message: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: "#1E1E1E", // Fondo oscuro para los mensajes
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    icon: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: "center",
        alignItems: "center",
    },
    iconText: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
    },
    messageContent: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF", // Texto en blanco
    },
    text: {
        fontSize: 14,
        color: "#BBB", // Color gris claro para el mensaje
    },
    details: {
        alignItems: "flex-end",
    },
    time: {
        fontSize: 12,
        color: "#888", // Color gris claro para la hora
    },
    notificationContainer: {
        backgroundColor: "#2979FF", // Azul vibrante para las notificaciones
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginTop: 5,
    },
    notification: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    floatingButtons: {
        position: "absolute",
        bottom: 80, // AUMENTÉ este valor para subir los botones
        right: 20,
        flexDirection: "column",
        alignItems: "center",
    },
    floatingButton: {
        width: 55,
        height: 55,
        marginVertical: 10,
    },
});