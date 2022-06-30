const { jsWithTsESM } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  transform: { ...jsWithTsESM.transform },
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['node_modules', 'lib'],
};
