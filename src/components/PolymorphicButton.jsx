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
