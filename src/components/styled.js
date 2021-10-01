import styled from 'styled-components';
import FadeIn from 'react-fade-in/lib/FadeIn';

export const StyledFlexGrid = styled(FadeIn)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledSearchCard = styled.div`
  width: 13rem;
  margin: 0 1rem 6rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 28rem;

  .img-wrapper {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    img {
      object-fit: cover;
      height: 18rem;
      width: 12rem;
    }
  }
  @media only screen and (max-width: 400px) {
    .img-wrapper {
      height: 17rem;
      img {
        object-fit: cover;
        width: 100%;
      }
    }
  }
  h1 {
    margin: 10px 0;
    font-size: 21px;
  }
  p {
    margin: 0;
  }
`;

export const StyledStar = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: ${props => (props.active ? '#ffc806' : '#d3d3d3')};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;
