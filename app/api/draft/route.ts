import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { getPreviewPageBySlug } from '@/_lib/api';

const { CONTENTFUL_PREVIEW_SECRET } = process.env;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');

  if (secret !== CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  const page = await getPreviewPageBySlug(slug);

  if (!page) {
    return new Response('Invalid slug', { status: 401 });
  }

  draftMode().enable();
  redirect(`/${page.slug}`);
}
