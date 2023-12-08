import * as React from 'react';

import MUIHeader from '../MUIHeader/MUIHeader.tsx';

const Header: React.FC = () => {
  const isLogin = false;

  return <MUIHeader isLogin={isLogin} />;
};

export default Header;
