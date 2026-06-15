/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/advocacia-machado',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
