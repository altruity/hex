import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ErrorBoundary from '@/_components/ErrorBoundary';
import FeatureCard from './Cards/FeatureCard';
import GenericCard from './Cards/GenericCard';

type SectionTypes = {
  data: {
    variant: string;
    title: string;
    summary: string;
    gradientBg: boolean;
    cardsCollection: {
      items: [
        {
          title: string;
          summary: string;
          icon: string;
          image: {
            url: string;
            title: string;
            description: string;
          };
          cta: {
            text: string;
            slug: string;
            isExternal: boolean;
          };
        },
      ];
    };
  };
};

const Section = ({ data }: SectionTypes): JSX.Element => {
  const { variant, title, summary, cardsCollection } = data;
  return (
    <ErrorBoundary>
      <Grid container spacing={6} my={0} alignItems={'flex-start'}>
        {variant === 'Feature' ? (
          cardsCollection?.items?.map((item: any, i: number) => (
            <Grid key={i} item xs={12} md={4}>
              <FeatureCard data={item} />
            </Grid>
          ))
        ) : (
          <>
            <Grid item xs={12}>
              {title && (
                <Typography component={'h2'} variant={'h2'} mb={0}>
                  {title}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={5}>
              {summary && <Typography>{summary}</Typography>}
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={4} py={0} alignItems={'flex-start'}>
                {cardsCollection?.items?.map((item: any, i: number) => (
                  <Grid item key={i} xs={12} md={6}>
                    <GenericCard data={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </ErrorBoundary>
  );
};

export default Section;
