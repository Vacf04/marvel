import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 compiler: {
    styledComponents: true,
    reactRemoveProperties: { properties: ['^data-cy$'] },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.annihil.us',
        port: '',
        pathname: '/u/prod/marvel/i/mg/**',
        search: '',
      },
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
        port: '',
        pathname: '/u/prod/marvel/i/mg/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
