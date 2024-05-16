module.exports = {
  components: './src/components',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Oblivion Playroom',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  baseUrl: '/playroom/',
};
