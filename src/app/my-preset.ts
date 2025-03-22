//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FFF5E5', // Muy claro, derivado de un tono pastel
      100: '#FFE6CC', // Claridad ligera
      200: '#FFCC99', // Incrementando saturación
      300: '#FFB266', // Medio claro
      400: '#FF9933', // Más cercano al central
      500: '#FF6900', // Color principal
      600: '#E55F00', // Un poco más oscuro
      700: '#CC5500', // Oscuro medio
      800: '#B24C00', // Oscuro profundo
      900: '#993300', // Muy oscuro
      950: '#7F2900', // Más oscuro aún
    },
  },
});

export default MyPreset;
