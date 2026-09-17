/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  displayName: 'ia',
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: { module: 'commonjs', esModuleInterop: true } }]
  }
};
