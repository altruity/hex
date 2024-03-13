import React from 'react';
import Box from '@mui/material/Box';

import ErrorBoundary from '@/_components/ErrorBoundary';

interface Props {
  children: React.ReactNode;
  // children: string | JSX.Element | JSX.Element[];
  // All other props
  [x: string]: any;
}

const Container = ({ children, ...rest }: Props): JSX.Element => (
  <ErrorBoundary>
    <Box
      maxWidth={'lg'}
      width={1}
      margin={'0 auto'}
      paddingX={5}
      paddingY={{ xs: 4, sm: 6, md: 8 }}
      {...rest}
    >
      {children}
    </Box>
  </ErrorBoundary>
);

export default Container;
