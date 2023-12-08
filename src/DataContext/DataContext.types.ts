import Athority from '../Components/Athority/Athority';
import Language from '../enum/language';

export interface IPageName {
  [key: string]: string;
}

export interface IDataContext {
  language: Language;
  pageName: IPageName;
  athority: Athority;
  setLanguage: (language: Language) => void;
}
