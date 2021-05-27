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
