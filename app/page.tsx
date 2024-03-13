import { Typography } from '@mui/material';
import Link from 'next/link';

export default async function Page() {
  return (
    <div className="container mx-auto pt-40 px-4 text-center">
      <p className="text-white">
        👉 Please visit this imaginary{' '}
        <Link href="/community" aria-label="Visit Community page">
          <Typography
            component="span"
            color="secondary.main"
            sx={{
              textDecoration: 'underline',
              ':hover': {
                textDecoration: 'none',
              },
            }}
          >
            Community page
          </Typography>
        </Link>
        , at your soonest convenience.
      </p>
    </div>
  );
}
