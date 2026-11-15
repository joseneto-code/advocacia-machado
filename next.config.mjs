/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/advogado-criminal',
  assetPrefix: '/advogado-criminal/',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig