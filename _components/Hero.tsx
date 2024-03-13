import React, { Suspense } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import ErrorBoundary from '@/_components/ErrorBoundary';
import Cta from './Cta';
import HeroSvg from './HeroSvg';

type HeroTypes = {
  data: {
    title: string;
    description: string;
    label: string;
    cta: {
      text: string;
      slug: string;
      isExternal: boolean;
    };
    backgroundImage: {
      url: string;
      title: string;
      description: string;
    };
  };
};

const Hero = ({ data }: HeroTypes): JSX.Element => {
  const { title, description, label, cta, backgroundImage } = data;
  return (
    <ErrorBoundary>
      <Box
        display={'grid'}
        gridTemplateColumns={{ sm: 'repeat(8, 1fr)' }}
        gap={4}
        alignItems={'center'}
        mt={3}
        mb={0}
      >
        <Box gridColumn={{ sm: '1 / 6', md: '1 / 5' }}>
          {title && (
            <Typography component={'h1'} variant={'h1'} mb={3.75}>
              {title}
            </Typography>
          )}
          <Box display={'flex'} gap={'27px'} maxWidth={'86%'} mb={6} ml={-4}>
            {label && (
              <Typography
                component={'span'}
                variant={'overline'}
                sx={{
                  display: 'inline-block',
                  marginTop: 12.75,
                  transform: 'rotate(270deg)',
                  whiteSpace: 'nowrap',
                  opacity: 0.5,
                  maxWidth: 8,
                  maxHeight: 24,
                }}
              >
                {label}
              </Typography>
            )}
            {description && (
              <Typography component={'h2'} variant={'body1'}>
                {description}
              </Typography>
            )}
          </Box>
          {cta && <Cta {...cta} />}
        </Box>

        <Box
          gridColumn={{ sm: '6 / 9', md: '5 / 9' }}
          role="presentation"
          width={1}
          height={1}
          sx={{
            svg: {
              width: '100%',
              marginLeft: -1,
              '@media(min-width: 600px) and (max-width: 900px)': {
                transform: 'scale(1.5)',
              },
            },
          }}
        >
          <Suspense
            fallback={
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={712}
                height={480}
                sx={{ bgcolor: 'primary.main' }}
              />
            }
          >
            {!!backgroundImage?.url ? (
              <Image
                src={backgroundImage?.url}
                alt={
                  (backgroundImage?.title || backgroundImage?.description) ??
                  'Hero graphic'
                }
                fill
                priority
              />
            ) : (
              <HeroSvg />
            )}
          </Suspense>
        </Box>
      </Box>
    </ErrorBoundary>
  );
};

export default Hero;
