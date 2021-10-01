import styled from 'styled-components';

import { StyledSearchCard } from '../styled';

// extending searchGrid from another styled component
export const StyledShowCard = styled(StyledSearchCard)`
  @media only screen and (max-width: 400px) {
    background-color: #fff;
    width: 20rem;
    height: 81%;
    padding: 1rem 1rem;
    border-radius: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration-color: #000;
      color: #000;
      &:hover {
        text-decoration-color: blue;
        color: blue;
      }
    }

    button {
      outline: none;
      border: 1px solid #ddd;
      border-radius: 5rem;
      padding: 2px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
