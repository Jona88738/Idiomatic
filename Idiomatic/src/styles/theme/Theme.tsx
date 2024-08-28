import {  } from "@mui/material/styles";


// Extiende la interfaz PaletteOptions de Material-UI para incluir el color personalizado
declare module "@mui/material/styles" {
    interface PaletteOptions {
      [key: string]: object | string | number // Acepta cualquier propiedad de tipo string
    }
    interface Palette {
      [key: string]: {
        main: string;
        light: string;
        dark: string;
        warning: string;
        info: string;
        success: string;
        contrastText: string;
        width: string;
      };
    }
  }
  
  declare module "@mui/material/styles" {
    interface BreakpointOverrides {
      xs: false; // removes the `xs` breakpoint
      sm: false;
      md: false;
      lg: false;
      xl: false;
      mobile: true; // adds the `mobile` breakpoint
      tablet: true;
      laptop: true;
      desktop: true;
      xldesktop: true;
    }
  }
  
  export const theme = ({

    shape: {
      borderRadius: 5,
    },
    typography: {
      fontFamily: 'Manrope, Roboto, Times New Roman, sans-serif',
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 600,
        laptop: 900,
        desktop: 1200,
        xldesktop: 1536,
      },
    },
    palette: {
      primary: {
        main: "#E0DFFD", //blanco
      },
      secondary: {
        main: "#46467A",
      },
      mainText: {
        main: "#FFFFFF"
      },
      textFieldBg: {
        main: "#E0DFFD",
      },
      backgroundBody: {
        main: "#E0DFFD"
      },
      icon: {
        main: "#03B075"
      },
      backgroundForm: {
        main: "#E0DFFD"
      },
      loginBtn: {
        bg: "#FFC212",
        text: "#FFFFFF"
      },
      registerBtn: {
        bg: "#FFC212",
        text: "#FFFFFF"
      },
      success: {
        main: "#03B075" 
      },
      error: {
        main: "#B00303"
      },
      veryWeak: {
        main: "#4AE52B"
      },
      weak: {
        main: "#22970A"
      },
      medium: {
        main: "#CADC17"
      },
      strong: {
        main: "#DC2F17"
      },

      mode: "light",

    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#E0DFFD', 
          },
        },
      },
    },
    
  });