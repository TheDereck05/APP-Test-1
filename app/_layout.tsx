import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Aquí definimos tus pantallas. El "name" debe coincidir con el nombre del archivo (sin .tsx) */}
        
        {/* index.tsx -> Es la pantalla principal */}
        <Stack.Screen name="index" options={{ title: 'Inicio' }} />
        
        {/* screen2.tsx -> La segunda pantalla */}
        <Stack.Screen name="screen2" options={{ title: 'Segunda Pantalla' }} />

        {/* Tus otras pantallas existentes */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}