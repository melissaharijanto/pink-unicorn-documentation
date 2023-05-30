---
sidebar_position: 2
---

# Installation

Firstly, ensure that you have [Node.js 16](https://nodejs.org/en/download/) installed on your machine. 

:::caution
Ensure that the Node version installed is Node 16, since it does not work on Node 17 and above due to backwards compatibility issues and [security vulnerability fixes with Open SSL](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported). 

If you have other Node versions installed, you can add in another Node version for the project to run on the computer. Windows users can benefit from using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)
:::

Next, open your terminal and clone the [repository](https://github.com/melissaharijanto/pink-unicorn.git).
```bash
git clone https://github.com/melissaharijanto/pink-unicorn.git
```

Navigate to the project.
```bash
cd pink-unicorn
```

Install all the dependencies.
```bash
yarn install
```

Finally, test the app by running it in your local host!
```bash
npm run start
```

:::tip
If you are running on Windows and encounter a weird error regarding `Invalid regular expression`, you might want to check [this](https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start) out. All the best!🥰
:::