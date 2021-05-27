import styled from 'styled-components';

const Input = () => {
  const Input = styled.input`
    padding: 0.8em;
    margin: 2em 0.25em 0.5em 0.75em;
    width: 30vw;
    color: ${(props) => props.inputColor || '#880404'};
    background-color: rgba(128, 128, 0, 0.3);
    border: none;
    border-radius: 3px;
  `;

  return (
    <div>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@input your email" type="text" inputColor="darkblue" />
    </div>
  );
};

export default Input;
