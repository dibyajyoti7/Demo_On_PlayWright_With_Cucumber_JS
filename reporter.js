const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenario: true,
  screenshotsDirectory: 'reports/screenshots',
  storeScreenshots: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'UAT',
    Browser: 'Chrome',
    Platform: 'Windows 10',
    Owner: 'Dibyajyoti'
  },
}

reporter.generate(options)
