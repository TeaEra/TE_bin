---
原文地址：https://reactjs.org/docs/code-splitting.html
---

<!-- TOC -->

- [代码分割(Code-Splitting)](#代码分割code-splitting)
    - [打包](#打包)
    - [Code Splitting](#code-splitting)
    - [import()](#import)
    - [库](#库)
    - [基于路由规则的代码分割](#基于路由规则的代码分割)

<!-- /TOC -->

# 代码分割(Code-Splitting)

## 打包

大多数的`React apps`都会使用例如`Webpack`或者`Browserify`这样的打包工具，将他们的文件打包。打包过程，其实是遵循引入的文件，并将他们合并成为一个文件，即一个`bundle`。这个`bundle`就可以被一个网页引用，从而加载出一个完成的`React app`。

e.g.

**App:**

```
// app.js
import { add } from './math.js';

console.log(add(16, 26)); // 42
```

```
// math.js
export function add(a, b) {
  return a + b;
}
```

**Bundle:**

```
function add(a, b) {
  return a + b;
}

console.log(add(16, 26)); // 42
```

> Note: 实际上，打包出来的`bundles`与上面的例子大不相同。上面的例子只是一个示意。

如果你使用`Create React App`、`Next.js`、`Gatsby`或者其他类似的脚手架工具，你会得到一个现成的`Webpack`配置，来帮助你完成打包。

如果你不是使用脚手架，则需要你自己设置打包过程。例如，参照[安装]()和[getting-started]()指南完成`Webpack`相关配置。

## Code Splitting

打包很重要，但是随着`app`成长，打包的过程也会越来越复杂。特别是当引入了很大的第三方库，你需要时刻注意避免过大的`bundle`造成`app`加载变慢。

为了避免`bundle`过大之后再去清理，更好的方法是提前进行分割，即`splitting bundle`。代码分割`code-splitting`是像`Webpack`、`Browserify`(通过`factor-bundle`)这样的打包工具的一个功能。通过代码分割，可以创建多个`bundles`，并在运行时动态加载。

代码分割可以帮助`app`实现懒加载，即只加载用户当下需要的部分，以此可以显著提升性能。代码分割不会减少`app`的代码总量，只是减少了用户当下不需要的代码，并且减少了首次加载时需要的代码。

## import()

最好的使用代码分割的方式就是通过`import()`。

**开发时:**

```
import { add } from './math';

console.log(add(16, 26));
```

**打包后:**

```
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

> Note: 动态加载语法`import()`是`ECMA`的一个提案，目前还没有成为语言规范。在近期的发布中，有望成为正式规范。

当`Webpack`识别到这种语法，就会自动进行代码分割。如果你使用`Create React App`，可以免去手动配置，开箱使用即可。`Next.js`也默认配置好了代码分割。

当使用`Babel`，你需要确保`Babel`能够解析`import()`语法。你需要引入插件`babel-plugin-syntax-dynamic-import`。

## 库

**React Loadable**

`React Loadable`使用了优雅、`React-friendly API`的方式，包含了动态引入，将给定的组件进行代码分割。

**Before:**

```
import OtherComponent from './OtherComponent';

const MyComponent = () => (
  <OtherComponent/>
);
```

**After:**

```
import Loadable from 'react-loadable';

const LoadableOtherComponent = Loadable({
  loader: () => import('./OtherComponent'),
  loading: () => <div>Loading...</div>,
});

const MyComponent = () => (
  <LoadableOtherComponent/>
);
```

`React Loadable`可以用来创建`loading states`、`error states`、`timeouts`、`preloading`等等。甚至有助于`server-side render`的代码分割。

## 基于路由规则的代码分割

选择代码分割点，会有点困惑。你需要保证分割点平均，且不会影响用户体验。

一个比较好的建议就是跟随路由进行分割。大多数用户习惯了页面切换时等待一定的加载时间。你可以立即重新渲染整个页面，用户不可能再做其他交互。

下面是一个使用了`React Router`和`React Loadable`进行基于路由的代码分割的例子。

```
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./routes/About'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </Router>
);
```
