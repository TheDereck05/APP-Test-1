import { useRouter } from "expo-router";
import { Button, View } from "react-native";
import styled from "styled-components/native";

export default function Screen2(){
    
    const router  = useRouter();
    return (
    <View>
        <Title> Hola gente de Youtube 2 </Title>
        <Button title="Ir a pantalla 1" onPress={()=>router.back()}>
        </Button>

    </View>
    );
} 
const Title = styled.Text`
    color : #b93131ff;
    font-size: 50px;
`;
