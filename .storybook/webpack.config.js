module.exports = (storybookBaseConfig, configType) => {
  // handle typescript file extensions:
  storybookBaseConfig.resolve.extensions = [".ts", ".tsx", ".js"];

  const [babelRule] = storybookBaseConfig.module.rules;
  const { loader } = babelRule.use[0];
  if (loader !== "babel-loader") {
    throw new Error(
      `The Storybook webpack config has changed, you need set 'babel-loader' to handle typescript extensions.`
    );
  }
  babelRule.test = /\.(tsx?)|(js)$/;

  return storybookBaseConfig;
};
