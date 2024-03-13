import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import ErrorBoundary from '@/_components/ErrorBoundary';
import { Compass, Play, Book, Chat } from '@/_icons';

const iconMapping: { [key: string]: any } = {
  Compass: <Compass />,
  Play: <Play />,
  Book: <Book />,
  Chat: <Chat />,
};

type CardTypes = {
  data: {
    title: string;
    summary: string;
    icon: string;
    cta: {
      text: string;
      slug: string;
      isExternal: boolean;
    };
  };
};

const GenericCard = ({ data }: CardTypes): JSX.Element => {
  const { title, summary, icon, cta } = data;
  return (
    <ErrorBoundary>
      <Link href={cta.slug} target={cta.isExternal ? '_blank' : '_self'}>
        <Card
          sx={{
            position: 'relative',
            py: 2,
            px: 2.3,
            border: '1px solid',
            borderColor: 'primary.light',
            overflow: 'visible',
            transition:
              'border 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) 0s, background-color 0.25s cubic-bezier(0.25, 0.1, 0.25, 1) 0s',
            ':before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: -1,
              right: -1,
              width: '20px',
              height: '1px',
              background: 'rgba(245, 192, 192, 0.4)',
            },
            ':after': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: -1,
              right: -1,
              width: '1px',
              height: '20px',
              background: 'rgba(245, 192, 192, 0.4)',
            },
            ':hover': {
              borderColor: 'rgba(245, 192, 192, 0.3)',
              backgroundColor: 'rgba(245, 192, 192, 0.1)',
            },
          }}
        >
          {title && (
            <Box
              display={'flex'}
              alignItems={'center'}
              gap={1.5}
              mb={2}
              sx={{
                svg: {
                  color: '#F5C0C0',
                  width: 16,
                  height: 16,
                },
              }}
            >
              {icon && iconMapping[icon]}
              <Typography component={'h3'} variant={'h3'}>
                {title}
              </Typography>
            </Box>
          )}
          {summary && (
            <Typography variant={'body2'} mb={2.5}>
              {summary}
            </Typography>
          )}
        </Card>
      </Link>
    </ErrorBoundary>
  );
};

export default GenericCard;
