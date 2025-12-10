import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native"; // 1. Importamos StyleSheet

export default function Screen1() {
    
    const router = useRouter();

    // 2. Aplicamos el estilo al View contenedor
    return (
        <View style={styles.container}>
            <Text> Hola gente de Youtube </Text>
            <Button title="Ir a pantalla 2" onPress={() => router.push("/screen2")} />
        </View>
    );
}

// 3. Definimos los estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,                 // Ocupa toda la pantalla disponible
        justifyContent: 'center', // Centra verticalmente (arriba-abajo)
        alignItems: 'center',     // Centra horizontalmente (izquierda-derecha)
        backgroundColor: 'white',
          // (Opcional) Para asegurar que el fondo contraste con el texto
    }
});