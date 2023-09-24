import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    blacky: PaletteColor;
  }

  interface PaletteOptions {
    blacky?: PaletteColorOptions;
  }
}
