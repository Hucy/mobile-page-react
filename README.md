# mobile-page-react

![CBS](https://img.shields.io/badge/BulidScript-CBS-ff69b4.svg)
[![Build Status](https://travis-ci.org/Hucy/mobile-page-react.svg?branch=master)](https://travis-ci.org/Hucy/mobile-page-react)
[![codecov](https://codecov.io/gh/Hucy/mobile-page-react/branch/master/graph/badge.svg)](https://codecov.io/gh/Hucy/mobile-page-react)

手机端一个简单的页面布局，用来快速的创建一个 `page layout`。

## 使用

- `npm install mobile-page-react`

- 示例：[![在线](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/z6qvnxxqn4)

```js
import * as React from 'react';
import { render } from 'react-dom';
import Page, { Content } from 'mobile-page-react';

const App = () => (
  <Page className="custom-class">
    <div
      style={{
        background: 'red',
      }}>
      Header
    </div>
    <Content>
      <div
        style={{
          height: '120%',
        }}>
        Content
      </div>
    </Content>
    <div
      style={{
        background: 'red',
      }}>
      Footer
    </div>
  </Page>
);

render(<App />, document.getElementById('root'));
```

## 组件

- `Page`

    props     | type   | default
    ----------|--------|--------
    className | string | ''
