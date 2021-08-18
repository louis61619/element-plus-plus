module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    // 模塊別名配置
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: ['!**/node_modules/**', '!**/vendor/**']
}
