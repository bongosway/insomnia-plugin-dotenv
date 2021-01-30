# Insomnia Plugin - dotenv
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/bongosway/insomnia-plugin-dotenv/Publish?label=Publish%20to%20NPM&logo=github) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/bongosway/insomnia-plugin-dotenv?logo=npm)
![npm](https://img.shields.io/npm/dt/insomnia-plugin-dotenv?logo=npm)

Fetch data from a .env file.

### Installation:

- Open Insomnia options (Ctrl + , | Cmd + ,)
- Type `insomnia-plugin-dotenv` on the **Plugins** tab

![](pix/install.gif)

### Usage:
- To load `.env` file via system dialog

![](pix/single.gif)


- To add `.env` via environment variable

![](pix/env.gif)


![](pix/change.gif)

- Multiple users can use relative path, which resolves to their specific location

![](pix/expandEnv.gif)

- Add Environment variables inside your .env file, it will be expanded automatically

![](pix/expandInsideEnv.gif)