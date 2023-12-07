import { createContext } from 'react';
import { IContext } from './context.types';

const Context = createContext<IContext>({
  lang: true,
  setLang: () => {},
});

export default Context;
