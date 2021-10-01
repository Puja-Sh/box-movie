import styled from 'styled-components';
import { StyledSearchCard } from '../styled';

export const StyledActorCard = styled(StyledSearchCard)`
  @media only screen and (max-width: 400px) {
    background-color: #fff;
    width: 20rem;
    height: 81%;
    padding: 1rem 1rem;
    border-radius: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .deathday {
    margin: 0;
    margin-top: 15px;
    font-weight: bold;
  }
`;
