require('env2')('.env');
const BINPATH = './bin/';

const config = {
  "globals_path": "./config/globals.js",
  "src_folders": ["./tests/TC"],
  "page_objects_path": "./tests/pages",
  "custom_commands_path": "./tests/commands",
  "output_folder": "./reports",
  "disable_colors": false,

  "selenium": {
    "start_process": true,
    "server_path": "./bin/selenium.jar",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "./bin/chromedriver.exe"
    }
  },

  "test_settings": {
    "default": {
      "filter": "**/*.js",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "on_failure": true,
        "path": "./screenshots"
      },

      "desiredCapabilities": {
        "browserName": "chrome",
        "acceptSslCerts": true,
        "chromeOptions" : {
          "args" : ["chrome"]
        }
      },

      "chrome": {
        "desiredCapabilities": {
          "browserName": "chrome",
          "javascriptEnabled": true,
          "acceptSslCerts": true
        }
      }
    }
  }
};

module.exports = config;

var selenium = require('selenium-download');
selenium.ensure(__dirname + '/bin', function (error) {
  if (error) console.error(error.stack);
  process.exit(0);
});
