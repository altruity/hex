import React from 'react';
import Box from '@mui/material/Box';

import ErrorBoundary from '@/_components/ErrorBoundary';
import Container from '@/_components/Container';
import Section from '@/_components/Section';
import Hero from '@/_components/Hero';
import { PageTypes } from '@/_types';

const Community = ({ data }: PageTypes): JSX.Element => {
  const { hero, sectionCollection } = data;

  // console.log('Community >>>', data);

  // TODO: Make sections dynamic
  const featuredSection = sectionCollection.items[0];
  const subSection = sectionCollection.items[1];

  return (
    <ErrorBoundary>
      <Box
        bgcolor={'primary.main'}
        pb={20}
        sx={{
          minHeight: '100vh',
          backgroundSize: '271px 270px',
          backgroundPosition: 'center center',
          backgroundImage:
            'linear-gradient(to left, transparent 135px, rgba(71, 57, 130, 0.6) 135px, transparent 136px)',
        }}
      >
        {hero && (
          <Container py={[0, 0, 0]}>
            <Hero data={hero} />
          </Container>
        )}

        {featuredSection && (
          <Box
            sx={{
              background: featuredSection?.gradientBg
                ? 'linear-gradient(20deg, rgba(1, 1, 27, 0) 50%, rgba(245, 192, 192, 0.25) 135%)'
                : undefined,
            }}
          >
            <Container py={[0, 0, 0]} mt={-3}>
              <Section data={featuredSection} />
            </Container>
          </Box>
        )}

        {subSection && (
          <Box
            sx={{
              background: subSection?.gradientBg
                ? 'linear-gradient(20deg, rgba(1, 1, 27, 0) 50%, rgba(245, 192, 192, 0.25) 135%)'
                : undefined,
            }}
          >
            <Container pt={[0, 0, 4]} pb={8} mt={8}>
              <Section data={subSection} />
            </Container>
          </Box>
        )}
      </Box>
    </ErrorBoundary>
  );
};

export default Community;
