/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Experimental features for performance optimization
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    // Enable turbo for faster builds
    ...(process.env.ANALYZE === 'true' && {
      bundleAnalyzer: {
        enabled: true,
      }
    })
  },
  
  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow placeholder images for development
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ]
  },
  
  // Production optimizations (Vercel-compatible)
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Only ignore eslint/typescript errors in development
  ...(process.env.NODE_ENV === 'development' && {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    // Development-specific configurations for Clacky environment
    allowedDevOrigins: ['*.clackypaas.com'],
  })
}

export default nextConfig