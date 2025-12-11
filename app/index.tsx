import { useRouter } from "expo-router";
import { useState } from "react";
import { Button } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "../styles/theme";

export default function Screen1() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const router = useRouter();

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }    
    
    const currentTheme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <Container>
                <Title> Hola gente de Youtube </Title>
                
                {/* Botón 1: Para navegar */}
                <Button 
                    title="Ir a pantalla 2" 
                    onPress={() => router.push("/screen2")} 
                />

                {/* --- AGREGA ESTE ESPACIO --- */}
                <Spacer /> 

                {/* --- AGREGA ESTE BOTÓN NUEVO --- */}
                <Button 
                    title={isDarkTheme ? "Cambiar a Claro" : "Cambiar a Oscuro"} 
                    color={isDarkTheme ? "orange" : "black"}
                    onPress={toggleTheme} 
                />

            </Container>
        </ThemeProvider>
    );
}

const Title = styled.Text`
    color : #b93131ff;
    font-size: 20px;
    margin-bottom: 20px; /* Un poco de espacio abajo del titulo */
`;

const Container = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    flex: 1; 
    justify-content: center; 
    align-items: center; 
`;

const Spacer = styled.View`
    height: 20px; /* Un espacio invisible entre botones */
`;