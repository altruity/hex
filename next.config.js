/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './_utils/imgLoader.ts',
    formats: ['image/avif', 'image/webp'],
  },
};
