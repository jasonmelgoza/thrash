const path = require('path')
const commonIncludes = [
  path.resolve(__dirname, './'),
  path.resolve(__dirname, './src/components'),
]

module.exports = {
  components: './src/components',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Oblivion Playroom',
  frameComponent: './playroom/Frame.js',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  baseUrl: '/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: commonIncludes,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, './src/styles'),
          exclude: /node_modules/,
          use: [require.resolve('style-loader'), require.resolve('css-loader')],
        },
      ],
    },
  }),
}
