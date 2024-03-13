import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ErrorBoundary from '@/_components/ErrorBoundary';
import { Arrow } from '@/_icons';

type CardTypes = {
  data: {
    title: string;
    summary: string;
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
  };
};

const FeatureCard = ({ data }: CardTypes): JSX.Element => {
  const { title, summary, image, cta } = data;
  return (
    <ErrorBoundary>
      <Link href={cta.slug} target={cta.isExternal ? '_blank' : '_self'}>
        <Card
          sx={{
            position: 'relative',
            overflow: 'visible',
            ':hover': {
              '.CornerLines': {
                opacity: 1,
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
          <CardMedia
            sx={{
              position: 'relative',
              minHeight: [300, 300, 168],
              overflow: 'hidden',
              backgroundColor: '#110E25',
              img: {
                objectFit: 'cover',
              },
            }}
          >
            <Suspense
              fallback={
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={554}
                  height={304}
                  sx={{ bgcolor: 'alternate.other' }}
                />
              }
            >
              <Image
                src={image.url}
                alt={image.title}
                fill={true}
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 1165px) 50vw, 33vw"
              />
            </Suspense>
          </CardMedia>
          <Box
            sx={{
              pt: 3,
              pb: 2.25,
              px: 2.75,
              position: 'relative',
              ':after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                backgroundColor: '#f5c0c0',
                opacity: 0.07,
              },
            }}
          >
            {title && (
              <Typography component={'h3'} variant={'h3'} mb={2}>
                {title}
              </Typography>
            )}
            {summary && (
              <Typography variant={'body2'} mb={2.5}>
                {summary}
              </Typography>
            )}
            {!!cta.slug && (
              <Box
                className={'Arrow'}
                display={'flex'}
                justifyContent={'flex-end'}
                mr={-0.75}
                mt={3}
              >
                <Arrow />
              </Box>
            )}
          </Box>
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
        </Card>
      </Link>
    </ErrorBoundary>
  );
};

export default FeatureCard;
