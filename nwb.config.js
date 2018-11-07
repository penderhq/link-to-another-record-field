module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'LinkToAnotherRecordField',
      externals: {
        react: 'React'
      }
    }
  }
}
