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

## Extending Styles

スタイル拡張

> 別のスタイルを継承する新しいコンポーネントを簡単に作成するには、`styled（）`コンストラクターでラップするだけです。

```js
import styled from 'styled-components';

const ExtendButton = () => {
  const ExtendButton = styled.button`
    background: white;
    color: #e2acbe;
    font-size: 1em;
    margin: 1em;
    padding: 0.75em 1em;
    border: 2px solid #e2acbe;
    border-radius: calc(0.75em * 2);
  `;

  const TomatoButton = styled(ExtendButton)`
    color: tomato;
    border-color: tomato;
    &:hover {
      color: whitesmoke;
      background-color: #67d1d1;
    }
  `;
  return (
    <div>
      <ExtendButton>Extend Button</ExtendButton>
      <TomatoButton>Tomato Button</TomatoButton>
    </div>
  );
};

export default ExtendButton;
```

`as` polymorphic prop

```js
import styled from 'styled-components';

const PolymorphicButton = () => {
  const PolymorphicButton = styled.button`
    display: inline-block;
    color: olivedrab;
    background-color: white;
    text-align: center;
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    width: 50vw;
    align-items: center;
    border: 2px solid olivedrab;
    border-radius: 0.5em;
    display: block;
  `;

  const TomatoButton = styled(PolymorphicButton)`
    color: tomato;
    border-color: tomato;
    cursor: pointer;
  `;

  const LemonButton = styled(PolymorphicButton)`
    color: #ffd700;
    border-color: #ffd700;
    box-shadow: 0em 0.15em 0.5em;
    cursor: wait;
  `;

  return (
    <div>
      <PolymorphicButton>Normal Button</PolymorphicButton>
      <PolymorphicButton as="a" href="/">
        Link with Button styles
      </PolymorphicButton>
      <TomatoButton as="a" href="/">
        Link with Tomato Button styles
      </TomatoButton>
      <LemonButton as="a" href="/">
        Remon Button
      </LemonButton>
    </div>
  );
};

export default PolymorphicButton;
```

カスタムコンポーネントにもスタイルが継承される。

```js
  const ReversedButton = (props) => (
    <CustomButton {...props} children={props.children.split('').reverse()} />
  );

  return (
    <div>
      <CustomButton>Normal Button</CustomButton>
      <CustomButton as={ReversedButton}>Custom Button with Normal Button styles</CustomButton>
    </div>
```

## Styling any component

>スタイル付きメソッドは、渡されたclassNameプロパティをDOM要素にアタッチする限り、独自のコンポーネントまたはサードパーティコンポーネントのすべてで完全に機能します。

説明の意味を理解できない。

## Passed props

> styled-componentsは既知のHTML属性を介してDOMに渡されます。

```js
return (
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@input your email" type="text" inputColor="darkblue" />
  </div>
);
```

> スタイル付きコンポーネントは要素とそれをスタイル設定するルールの組み合わせであるため、次のように`Counter`を記述します。

```js
<StyledCounter>
  <Paragraph>{this.state.count}</Paragraph>
  <Button onClick={this.increment}>+</Button>
  <Button onClick={this.decrement}>-</Button>
</StyledCounter>
```

