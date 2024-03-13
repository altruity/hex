import React from 'react';
import { getAllPages } from '@/_lib/api';

import Community from '@/_views/Community';

export async function generateMetadata() {
  return {
    title: 'Community | Hex',
    description: 'Community page POC',
  };
}

export default async function Page() {
  const allPages = await getAllPages(true);
  const page = allPages[0];
  return <Community data={page} />;
}
