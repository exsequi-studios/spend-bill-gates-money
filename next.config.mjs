/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  
  // Image optimization
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  
  // Only ignore eslint/typescript errors in development
  ...(process.env.NODE_ENV === 'development' && {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    }
  }),
  
  // Development-specific configurations
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: ['*.clackypaas.com'],
  }),
  
  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    output: 'standalone',
    compress: true,
    poweredByHeader: false,
    generateEtags: false,
    
    // Enable bundle analyzer in CI
    ...(process.env.ANALYZE === 'true' && {
      experimental: {
        ...nextConfig.experimental,
        bundleAnalyzer: {
          enabled: true,
        }
      }
    })
  })
}

export default nextConfig