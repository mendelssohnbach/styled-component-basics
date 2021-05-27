# Getting Started with Create React App

[Styles-components > Documentation > Basics](https://styled-components.com/docs/basics)

## Installation

[Quick start](https://www.npmjs.com/package/babel-plugin-styled-components#quick-start)

```shell
$ npx create-react-app ./
$ npm install --save styled-components
$ npm install --save-dev babel-plugin-styled-components
$ npm ls
styled-component-basics@0.1.0
├── @testing-library/jest-dom@5.12.0
├── @testing-library/react@11.2.7
├── @testing-library/user-event@12.8.3
├── babel-plugin-styled-components@1.12.0
├── react-dom@17.0.2
├── react-scripts@4.0.3
├── react@17.0.2
├── styled-components@5.3.0
└── web-vitals@1.1.2
```

```.babelrc
{
  "plugins": ["babel-plugin-styled-components"]
}
```

2019.04.02のブログ記事を発見
[こちら](https://blog.yuhiisk.com/archive/2018/12/09/add-display-name-styled-components.html)

## Getting Stared

> `styled-components`は、タグ付きテンプレートリテラルを利用してコンポーネントのスタイルを設定します。

> コンポーネントとスタイル間のマッピングを削除します。

```js
import styled from 'styled-components';

const Title = () => {
  // h1タグスタイリング
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // sectionタグをレンダリング
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  );
};

export default Title;
```

```html
<section class="sc-hKFxyN eBYiVx">
  <h1 class="sc-dlnjwi kCeFAH">Hello World!</h1>
</section>
```

## Adapting based on props

プロップに基づいてコンポーネントのスタイルを切り替える？

```js
import styled from 'styled-components';

const Button = (props) => {
  const Button = styled.button`
    background: ${(props) => (props.primary ? 'lime' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  return (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
};

export default Button;
```

`background: ${props => props.primary ? "palevioletred" : "white"};`


