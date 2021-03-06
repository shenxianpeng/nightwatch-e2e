# `nightwatch-e2e example`

This repository is used to show you the structure, example, and how to use Nightwatchjs E2E testing the official website http://nightwatchjs.org/

[![CircleCI](https://circleci.com/gh/nightwatchjs-cn/nightwatch-e2e/tree/master.svg?style=svg)](https://circleci.com/gh/nightwatchjs-cn/nightwatch-e2e/tree/master)
[![Build Status](https://travis-ci.org/nightwatchjs-cn/nightwatch-e2e.svg?branch=master)](https://travis-ci.org/nightwatchjs-cn/nightwatch-e2e)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/def20dd879ec4767afcc18810591311d)](https://www.codacy.com/manual/xianpeng.shen/nightwatch-e2e?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=shenxianpeng/nightwatch-e2e&amp;utm_campaign=Badge_Grade)

## Development

### Prerequisite

* Install Node.js > 8.0.0 [Download](https://nodejs.org/en/download/)
* Install JDK 8 [Download](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

```bash
$ git clone git@github.com:nightwatchjs-cn/nightwatch-e2e.git
$ cd nightwatch-e2e
$ npm install
$ node nightwatch.conf.js           // download webdriver and selenium
$ cp sample.env .env                // copy sample environment and change the environment variables to run test
```

### Run e2e test scrpits

```bash
$ npm test                          // Run whole test
$ npm test tests/TC/TC45/login.js   // Run certain test
$ npm test tests/TC/TC45            // Run a group of test
```

More run test information can reference nightwatchjs [Development Guide.](http://nightwatchjs.org/guide/#running-tests)


[中文 README](https://github.com/nightwatchjs-cn/nightwatch-e2e/blob/master/README.CN.md)