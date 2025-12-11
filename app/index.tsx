import { useRouter } from "expo-router";
import { Button, View } from "react-native";
import styled from "styled-components/native";
export default function Screen1() {
    
    const router = useRouter();

    
    return (
        <View style={{flexDirection: "row"}}>
            <Title> Hola gente de Youtube </Title>
            <Button title="Ir a pantalla 2" onPress={() => router.push("/screen2") } />
        </View>
    );
}
const Title = styled.Text`
    color : #b93131ff;
    font-size: 20px;
`;
