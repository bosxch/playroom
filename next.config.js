/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Agrega la configuración del loader para archivos MP4
    config.module.rules.push({
      test: /\.(mp4|webm)$/, // Ajusta las extensiones según tus necesidades
      use: {
        loader: 'file-loader', // o 'url-loader' según lo que hayas instalado
        options: {
          publicPath: '/_next',
          name: 'static/videos/[name].[hash].[ext]', // Ajusta la ruta de salida
        },
      },
    });

    return config;
  },
};
  
