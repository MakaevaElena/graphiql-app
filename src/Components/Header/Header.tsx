import * as React from 'react';
import { UIStrings } from '../../assets/UIStrings.tsx';
import { useContext } from 'react';
import Context from '../../context/context.tsx';

import MUIHeader from '../MUIHeader/MUIHeader.tsx';

const Header: React.FC = () => {
  const isLogin = false;
  const { lang, setLang } = useContext(Context);

  const pages = [
    UIStrings.Welcome[+lang],
    UIStrings.Login[+lang],
    UIStrings.Editor[+lang],
  ];

  return (
    <MUIHeader pages={pages} isLogin={isLogin} lang={lang} setLang={setLang} />
  );
};

export default Header;
