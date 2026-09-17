/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  },
  // Node 22+/24 removeu suporte md4, quebrando o hash padrão do webpack
  // ("WasmHash._updateWithBuffer ... reading 'length'"). Usa sha256.
  webpack: (config) => {
    config.output = { ...config.output, hashFunction: 'sha256' };
    return config;
  },
};

module.exports = nextConfig;