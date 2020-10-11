# CovRT

An application that shows real-time data provided by [Smartable](https://smartable.ai) to track the novel Coronavirus

---
# Table Of Contents
1. [Installation](#installation)
    + [Prerequisites](#prerequisites)
    + [Setting your API key](#setting-your-api-key)
    + [With Docker](#with-docker)
    + [The Default Way](#the-default-way)
    + [Configuration](#configuration)
2. [Contributing](#contributing)
3. [License](#license)

# Installation
## Prerequisites
* [Quasar CLI](https://quasar.dev/quasar-cli/installation)
* [Rapid API key](rapidapi.com)
* [Docker](https://www.docker.com/get-started) (optional)

## Setting your API key
* Sign up for an account on RapidAPI and [subscribe to smartables API](https://rapidapi.com/SmartableAI/api/coronavirus-smartable)
* copy the .env.example file and name it .env
```shell
cp .env.example .env
```
* Set the API key from RapidAPI as the API_KEY environment variable

## With docker
* Clone the repository
```shell
git clone https://github.com/ImBrett/covrt.git
```

* Run the container
```shell
docker-compose up
```

## The default way
* Clone the repository
```shell
git clone https://github.com/ImBrett/covrt.git
```

* Install the dependancies
```shell
yarn
```

* Serve for development
```shell
quasar dev
```

## Configuration
Most configuration settings can be set from [Quasars default configuration file](./quasar.conf.js)

If you use VS Code (recommended) there are some handy editor settings and plugin recommendations [here](https://quasar.dev/start/vs-code-configuration)

# Contributing
Please see the following files if you want to contribute to this project:
* [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
* [Contributing](./.github/CONTRIBUTING.md)

# License
This package is released under the [MIT License](LICENSE)
