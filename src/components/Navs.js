import React from 'react';
import { useLocation } from 'react-router';
import { StyledLinkStyled, StyledNavList } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];
function Navs() {
  const location = useLocation();

  return (
    <div>
      <StyledNavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <StyledLinkStyled
              to={item.to}
              className={item.to === location.pathname ? 'active' : ''}
            >
              {item.text}
            </StyledLinkStyled>
          </li>
        ))}
      </StyledNavList>
    </div>
  );
}

export default Navs;
