const config = {
  verbose: true,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  roots: ['<rootDir>'],
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {
  //   "@env/(.*)$": "<rootDir>/src/environments/$1"
  //   // flat: '<rootDir>/node_modules/flat/index.js', // I need this because I use transloco as translate library
  // },
  testEnvironment: "jsdom",
 // if we need to use transloco as a translation library
 //  transformIgnorePatterns: [
 //    '/node_modules/(?!flat)/', // Exclude 'flat' from transformations
 //  ],
};

module.exports = config;
