# CovRT

An application that shows real-time data provided by [Smartable](https://smartable.ai) to track the novel Coronavirus

---
# Table Of Contents
1. [Installation](#installation)
    + [Prerequisites](#prerequisites)
    + [With Docker](#with-docker)
    + [The Default Way](#the-default-way)
    + [Configuration](#configuration)
5. [Contributing](#contributing)
6. [License](#license)

# Installation
## Prerequisites
* [Quasar CLI](https://quasar.dev/quasar-cli/installation)
* [Docker](https://www.docker.com/get-started) (optional)

## With docker
* Clone the repository
```shell
git clone https://github.com/ImBrett/covrt.git
```

* Run the container
```shell
docker-compose up --build
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
quasar dev -m pwa --modern
```

## Configuration
Most configuration settings can be set from [Quasars default configuration file](./quasar.conf.js)

If you use VS Code (recommended) there are some handy editor settings and plugin recommendations [here](https://quasar.dev/start/vs-code-configuration)

# Contributing
Please see the following files if you want to contribute to this project:
* [Code of Conduct](CODE_OF_CONDUCT.md)
* [Contributing](CONTRIBUTING.md)

# License
This package is released under the [MIT License](LICENSE)
