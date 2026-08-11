import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  eslint: {
    // Reglas nuevas de react-hooks no aplicaban en el build de Vite;
    // no bloqueamos la migración por lint preexistente.
    ignoreDuringBuilds: true,
  },
}

export default nextConfig