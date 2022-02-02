# Hundo Design System 🎨

<p align="center">
<a href="https://github.com/hundo-careers/hundo-design-system/actions/workflows/chromatic.yml">
<img src="https://github.com/hundo-careers/hundo-design-system/actions/workflows/chromatic.yml/badge.svg?branch=main" />
</a>
<a href="https://npm.im/hundo-design-system">
<img src="https://img.shields.io/npm/v/hundo-design-system.svg" />
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

__Install:__ 
```shell
npm install hundo-design-system
```

or 

```shell
yarn add hundo-design-system
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
