import styled from 'styled-components';

const CustomButton = () => {
  const CustomButton = styled.button`
    display: inline-block;
    color: gray;
    background-color: inherit;
    font-size: 1em;
    margin: 1em;
    padding: 0.75em 1em;
    border: 2px solid aqua;
    border-radius: 3px;
    display: block;
  `;

  const ReversedButton = (props) => (
    <CustomButton {...props} children={props.children.split('').reverse()} />
  );

  return (
    <div>
      <CustomButton>Normal Button</CustomButton>
      <CustomButton as={ReversedButton}>Custom Button with Normal Button styles</CustomButton>
    </div>
  );
};

export default CustomButton;
