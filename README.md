# Hundo Design System 🎨

<p>
<a href="https://github.com/hundo-careers/hundo-design-system/actions/workflows/chromatic.yml">
<img src="https://github.com/hundo-careers/hundo-design-system/actions/workflows/chromatic.yml/badge.svg?branch=main" />
</a>

## Development:

__Start development server:__
```shell
npm i && npm run dev
```

__Release new version:__
```shell
npm run release
```

## How to use:

__Generate Token:__
In order to use the package within another repository, you'll need to set up an `.npmrc` file with the following contents:

```shell
@hundo-careers:registry=https://npm.pkg.github.com
```

You will then need to create a Github Personal Access Token, that can be used to autheicate yourself locally. To do this, click [this link](https://github.com/settings/tokens) and generate a new token. You should select the following scope:

<img src="https://github.com/hundo-careers/hundo-design-system/src/assets/scope.png">

__Set Registry:__
You will then need to run this command to login into Github Package manager:

```shell
npm login --scope=@hundo-careers --registry=https://npm.pkg.github.com

> Username: YOUR GITHUB USERNAME
> Password: GENERATED TOKEN
> Email: YOUR GITHUB EMAIL ADDRESS

```

__Install:__ 
Once logged in, you should be able to consume the package using the following commands:
```shell
npm install @hundo-careers/hundo-design-system
```

or 

```shell
yarn add @hundo-careers/hundo-design-system
```

__Import:__ 
```js
import { ThemeProvider, Button } from 'hundo-design-system';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <Button label="Hundo" />
      </ThemeProvider>
    </div>
  );
}
```

__Theming:__ 

The library includes a `ThemeProvider`, which is a component that provides the capacity to introduce themes to our base components. This utilises the Styled Components theme provider and docs can be found [here](https://styled-components.com/docs/advanced#theming).


```js
import { ThemeProvider, Button } from 'hundo-design-system';

const App = () => {
  return (
    <ThemeProvider theme="dark">
      <Button label="Hundo is dark" />
    </ThemeProvider>;
  );
}
```
