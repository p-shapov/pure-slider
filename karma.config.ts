import {Config} from 'karma';
import webpackConfig from './webpack/test.webpack.config';

const karmaConfig: (config: Config) => void = (config) => {
  config.set({
    singleRun: false,
    autoWatch: true,
    files: ['src/test/index.ts'],
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['mocha'],
    preprocessors: {'src/test/index.ts': ['webpack', 'sourcemap']},
    plugins: [
      'karma-jasmine', 'karma-webpack', 'karma-chrome-launcher',
      'karma-mocha-reporter', 'karma-sourcemap-loader',
      'karma-typescript'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  });
};

export default karmaConfig;