const path = require('path')
const commonIncludes = [
  path.resolve(__dirname, './'),
  path.resolve(__dirname, './src/components'),
]

module.exports = {
  components: './src/components',
  outputPath: './dist/playroom',

  title: 'Thrash',
  themes: './playroom/themes.js',
  frameComponent: './playroom/Frame.js',
  widths: [320, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Container>
      <Box p="5">
        <Card size="2">
          <Box p="1">
            <Flex direction="column" gap="3">
              <Box pb="4">
                <Heading>Edit profile</Heading>
                <Text>Make changes to your profile.</Text>
              </Box>
            </Flex>
            <Flex direction="column" gap="3">
              <Box>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Profile Picture
                  </Text>
                </label>
                <Box
                  pb="4"
                  width="80px"
                  height="112px"
                  pb="4"
                  position="relative"
                >
                  <Avatar
                    fallback="jm"
                    radius="full"
                    size="6"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  />
                  <Box style={{ position: "absolute", bottom: "24px" }}>
                    <Button size="1" varient="surface" color="gray">
                      Edit
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Flex>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Name
                </Text>
                <TextField.Root
                  size="2"
                  defaultValue="Jason Melgoza"
                  placeholder="Enter your full name"
                />
              </label>
              <label>
                <Text as="span" size="2" mb="1" weight="bold">
                  Email
                </Text>
                <TextField.Root
                  size="2"
                  defaultValue="jason.melgoza@example.com"
                  placeholder="Enter your email"
                />
              </label>
              <label>
                <Text as="span" size="2" mb="1" weight="bold">
                  Bio
                </Text>
                <TextArea placeholder="Tell us a little bit about yourself" />
                <Text size="1">
                  You can @mention other users and organizations to link to them.
                </Text>
              </label>
              <Flex justify="end">
                <Box pt="4">
                  <Button>
                    <Box>Save</Box>
                    <ArrowRightIcon />
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Card>
      </Box>
    </Container>
  `,
  baseUrl: '/',
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
          exclude: /node_modules\/(?!(@radix-ui)\/).*/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  }),

  defaultVisibleThemes: ['Light'],
}
