/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
<<<<<<< HEAD
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
};
=======
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
  
>>>>>>> 8313ecdcaf4e51cf7ebe4adc557d43d37db4e305
