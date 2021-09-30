import styled from 'styled-components';

export const StyledShowPageWrapper = styled.div`
  margin: 2rem 10rem;
  padding: 1rem 20px 0 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;

  @media only screen and (min-width: 300px) {
    margin: 0rem 0rem;
    padding: 0.1rem 40px 0 40px;
  }

  @media only screen and (min-width: 516px) {
    margin: 2rem 5rem;
    padding: 0.1rem 40px 0 40px;
  }

  @media only screen and (min-width: 768px) {
    margin: 2rem 5rem;
    /* padding: 0.1rem 60px 0 60px; */
  }

  @media only screen and (min-width: 992px) {
    margin: 2rem 5rem;
    padding: 0.1rem 80px 0 80px;
  }
`;

export const StyledInfoBlock = styled.div`
  margin-bottom: 40px;

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
