/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    // ... otras configuraciones ...
  
    webpack: (config, { isServer }) => {
      // Agrega la configuración del loader para archivos MP4
      config.module.rules.push({
        test: /\.(mp4|webm)$/, // Ajusta las extensiones según tus necesidades
        use: {
          loader: 'file-loader', // o 'url-loader' según lo que hayas instalado
        },
      });
  
      return config;
    },
  };
  
