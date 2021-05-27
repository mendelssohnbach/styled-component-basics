import styled from 'styled-components';

const Link = ({ className, children }) => <a className={className}>{children}</a>;

const StyledLink = () => {
  const StyledList = styled(Link)`
    color: pink;
    font-weight: bold;
    margin-left: 1.5em;
  `;

  return (
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledList>Styled, exciting Link</StyledList>
    </div>
  );
};

export default StyledLink;
