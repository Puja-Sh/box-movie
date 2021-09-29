import React from 'react';
import Navs from './Navs';
import Title from './Title';

function MainPageLayout({ children }) {
  return (
    <div>
      <Title
        title="Box Movie Office"
        subtitle="Looking for a movie or an actor?"
      />
      <Navs />
      {children}
    </div>
  );
}

export default MainPageLayout;
