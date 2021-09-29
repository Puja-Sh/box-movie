import styled from 'styled-components';

export const StyledFlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledSearchCard = styled.div`
  width: 13rem;
  margin: 0 15px 40px;

  .img-wrapper {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #ddd;
    img {
      object-fit: cover;
      height: 18rem;
      width: 12rem;
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