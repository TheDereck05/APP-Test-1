import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Screen2(){
    
    const router  = useRouter();
    return (
    <View style={styles.container}>
        <Text> Hola gente de Youtube 2 </Text>
        <Button title="Ir a pantalla 1" onPress={()=>router.back()}>
        </Button>

    </View>
    );
} 

//3. Definimos los estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,                 // Ocupa toda la pantalla disponible
        justifyContent: 'center', // Centra verticalmente (arriba-abajo)
        alignItems: 'center',     // Centra horizontalmente (izquierda-derecha)
        backgroundColor: 'white',
          // (Opcional) Para asegurar que el fondo contraste con el texto
    }
});