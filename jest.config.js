module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^core(.*)$": "<rootDir>/src/core$1",
    "^ui(.*)$": "<rootDir>/src/ui$1",
    "^assets(.*)$": "<rootDir>/src/__mocks__/webpMapper.js",
    "\\.scss$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};
