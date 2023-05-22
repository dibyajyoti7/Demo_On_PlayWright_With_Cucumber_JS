const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.step.js
    --format json:./reports/cucumber_report.json
`
module.exports = {
  default: `${common} features/**/*.feature`,
}
