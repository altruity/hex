import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ErrorBoundary from '@/_components/ErrorBoundary';

type CtaTypes = {
  text: string;
  slug: string;
  isExternal: boolean;
};

const Cta = ({ text, slug, isExternal }: CtaTypes): JSX.Element => {
  return (
    <ErrorBoundary>
      <Link href={slug} target={isExternal ? '_blank' : '_self'}>
        <Box
          position={'relative'}
          display={'inline-flex'}
          alignItems={'center'}
          px={2.5}
          py={2}
          sx={{
            transition:
              'background-color 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) 0s, border-color 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) 0s',
            border: '1px solid transparent',
            background:
              'linear-gradient(to right, rgb(1, 1, 27), rgb(1, 1, 27)) padding-box, linear-gradient(45deg, rgb(245, 192, 192), rgb(173, 142, 182)) border-box',
            ':after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(45deg, rgba(245, 192, 192, 0.85), rgba(173, 142, 182, 0.5))',
              opacity: 0.2,
              transition: 'opacity 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) 0s',
            },
            ':hover': {
              backgroundColor: 'rgba(245, 192, 192, 0.12)',
              borderColor: 'rgba(245, 192, 192, 0.4)',
              ':after': {
                opacity: 0.3,
              },
              '.CornerLines': {
                opacity: 1,
              },
              '.CornerCircles': {
                opacity: 0,
              },
              '.CornerLines__TopLeft:before': {
                transform: 'translate(-5px, -5px)',
              },
              '.CornerLines__TopRight:before': {
                transform: 'translate(5px, -5px)',
              },
              '.CornerLines__BottomLeft:before': {
                transform: 'translate(-5px, 5px)',
              },
              '.CornerLines__BottomRight:before': {
                transform: 'translate(5px, 5px)',
              },
            },
          }}
        >
          <Box
            className="CornerLines"
            position={'absolute'}
            sx={{
              inset: 0,
              opacity: 0,
              span: {
                ':before': {
                  content: '""',
                  position: 'absolute',
                  width: 15,
                  height: 15,
                  borderColor: '#473982',
                  borderStyle: 'solid',
                },
              },
              ':hover': {
                opacity: 1,
                span: {
                  ':before': {
                    width: 15,
                    height: 15,
                    transition:
                      'transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) 0s, opacity 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) 0s',
                  },
                },
              },
            }}
          >
            <Box
              className="CornerLines__TopLeft"
              component="span"
              sx={{
                ':before': {
                  top: -1,
                  left: -1,
                  borderTopWidth: '1px',
                  borderLeftWidth: '1px',
                },
              }}
            />
            <Box
              className="CornerLines__TopRight"
              component="span"
              sx={{
                ':before': {
                  top: -1,
                  right: -1,
                  borderRightWidth: '1px',
                  borderTopWidth: '1px',
                },
              }}
            />
            <Box
              className="CornerLines__BottomLeft"
              component="span"
              sx={{
                ':before': {
                  bottom: -1,
                  left: -1,
                  borderLeftWidth: '1px',
                  borderBottomWidth: '1px',
                },
              }}
            />
            <Box
              className="CornerLines__BottomRight"
              component="span"
              sx={{
                ':before': {
                  bottom: -1,
                  right: -1,
                  borderRightWidth: '1px',
                  borderBottomWidth: '1px',
                },
              }}
            />
          </Box>
          <Box
            className="CornerCircles"
            position={'absolute'}
            sx={{
              inset: 0,
              opacity: 1,
              transition: 'opacity 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) 0s',
              span: {
                ':before': {
                  content: '""',
                  position: 'absolute',
                  width: 15,
                  height: 15,
                  borderRadius: '50%',
                  border: '1px solid rgba(245, 192, 192, 0.3)',
                },
                ':after': {
                  content: '""',
                  position: 'absolute',
                  width: 15,
                  height: 15,
                  borderRadius: '50%',
                  border: '1px solid rgba(245, 192, 192, 0.3)',
                },
              },
              ':hover': {
                opacity: 0,
              },
            }}
          >
            <Box
              component="span"
              sx={{
                ':before': {
                  top: -9,
                  left: -9,
                },
                ':after': {
                  bottom: -9,
                  left: -9,
                },
              }}
            />
            <Box
              component="span"
              sx={{
                ':before': {
                  top: -9,
                  right: -9,
                },
                ':after': {
                  bottom: -9,
                  right: -9,
                },
              }}
            />
          </Box>
          <Typography
            component={'span'}
            variant="body2"
            color={'secondary.main'}
          >
            {text}
          </Typography>
        </Box>
      </Link>
    </ErrorBoundary>
  );
};

export default Cta;
