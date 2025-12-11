// styled.d.ts
//Carpeta Agregada para conectar theme.tsx con styled-components
import 'styled-components/native';

// 1. Importa tu tema real. 
// (Si tu carpeta 'styles' está en la raíz, usa esta línea):
import { lightTheme } from './styles/theme';
// (NOTA: Si te marca error en la ruta, ajustala según donde tengas tu archivo theme.tsx)

// 2. Extrae la estructura automáticamente
type ThemeType = typeof lightTheme;

// 3. Le dice a TypeScript: "Mi DefaultTheme es igual a ThemeType"
declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}