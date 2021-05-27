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
