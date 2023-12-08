import Language from '../enum/language';

export interface IPageName {
  [key: string]: string;
}

export interface IDataContext {
  language: Language;
  pageName: IPageName;
  setLanguage: (language: Language) => void;
}
