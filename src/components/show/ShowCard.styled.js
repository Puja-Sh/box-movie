import styled from 'styled-components';

import { StyledSearchCard } from '../styled';

// extending searchGrid from another styled component
export const StyledShowCard = styled(StyledSearchCard)`
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
      padding: 5px 20px;
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
