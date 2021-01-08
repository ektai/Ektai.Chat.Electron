import React, { FC } from 'react';

import { EktaiChatLogo } from '../components/EktaiChatLogo';

const DmgBackground: FC = () => {
  const backgroundColor = '#F7F8FA';

  return <svg viewBox='0 0 600 422' xmlns='http://www.w3.org/2000/svg'>
    <rect width='600' height='422' fill={backgroundColor}/>
    <g transform='translate(200 0) scale(0.333)'>
      <EktaiChatLogo />
    </g>
  </svg>;
};

export default DmgBackground;
