/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/semi */
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_KEY_IP: process.env.NEXT_PUBLIC_API_KEY_IP,
  },
};

module.exports = nextConfig;
