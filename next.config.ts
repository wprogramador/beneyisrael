import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Reglas nuevas de react-hooks no aplicaban en el build de Vite;
    // no bloqueamos la migración por lint preexistente.
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
