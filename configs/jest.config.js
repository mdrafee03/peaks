'use strict';

module.exports = {
  rootDir: '..',
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  testRunner: '<rootDir>/node_modules/jest-circus/runner.js',
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/tests/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>/tests/jest/cssTransform.js',
    '^(?!.*\\.(ts|tsx|css|json)$)': '<rootDir>/tests/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    'src/(.*)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx', 'node'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: false,
};
