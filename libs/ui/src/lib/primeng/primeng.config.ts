import Material from '@primeuix/themes/material';
import { PrimeNGConfigType } from 'primeng/config';

export const primengConfig: Partial<PrimeNGConfigType> = {
  ripple: true,
  theme: {
    preset: Material,
  },
  inputVariant: 'filled',
  zIndex: {
    modal: 1100,
    overlay: 1000,
    menu: 1000,
    tooltip: 1100,
  },
};
