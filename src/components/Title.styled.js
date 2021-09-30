import styled from 'styled-components';

export const StyledTitleWrapper = styled.div`
  text-align: center;
  margin: 1.5rem 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;
