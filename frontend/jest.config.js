module.exports = {
  verbose: true,
  "setupFilesAfterEnv": ["<rootDir>setupTests.js"],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/styleMock.js',
  },
  testEnvironment: "node"
}
