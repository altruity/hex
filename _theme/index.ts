import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';

import { inter, mono } from '@/_lib/constants';
import { light } from './palette';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

const getTheme = (mode: string): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: light,
      typography: {
        fontFamily: `${inter.style.fontFamily}, sans-serif`,
        h1: {
          color: 'white' as React.CSSProperties['color'],
          fontSize: 60 as React.CSSProperties['fontSize'],
          fontWeight: 700 as React.CSSProperties['fontWeight'],
        },
        h2: {
          color: 'white' as React.CSSProperties['color'],
          fontSize: 40 as React.CSSProperties['fontSize'],
          lineHeight: 1.15 as React.CSSProperties['lineHeight'],
          fontWeight: 700 as React.CSSProperties['fontWeight'],
        },
        h3: {
          color: 'white' as React.CSSProperties['color'],
          fontSize: 20 as React.CSSProperties['fontSize'],
          lineHeight: 1.15 as React.CSSProperties['lineHeight'],
          fontWeight: 600 as React.CSSProperties['fontWeight'],
        },
        h6: {
          fontSize: '1.25rem' as React.CSSProperties['fontSize'],
          fontWeight: 300 as React.CSSProperties['fontWeight'],
        },
        body1: {
          color: '#F5C0C0' as React.CSSProperties['color'],
          fontSize: 20 as React.CSSProperties['fontSize'],
          lineHeight: 1.5 as React.CSSProperties['lineHeight'],
        },
        body2: {
          color: '#F5C0C0' as React.CSSProperties['color'],
        },
        button: {
          textTransform: 'none',
          fontWeight: 'medium' as React.CSSProperties['fontWeight'],
        },
        overline: {
          color: '#F5C0C0' as React.CSSProperties['color'],
          fontWeight: '700' as React.CSSProperties['fontWeight'],
          fontFamily: `${mono.style.fontFamily}, monotype`,
          letterSpacing: '3px' as React.CSSProperties['letterSpacing'],
        },
      },
      breakpoints: {
        values: {
          // Defaults
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1165,
          xl: 1536,
          xxl: 1800,
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: () => ({
            body: { backgroundColor: '#01011B' },
          }),
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 0,
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          } as ComponentsOverrides['MuiCard'],
        },
      },
    }),
  );

export default getTheme;
