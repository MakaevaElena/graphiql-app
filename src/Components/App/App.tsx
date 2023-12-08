import EditorPage from '../../pages/EditorPage/EditorPage';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import Header from '../Header/Header';
import { useState } from 'react';
import Language from '../../enum/language';
import { DataContextProvider } from '../../DataContext/DataContextProvider';
import UIStrings from '../../assets/UIStrings.json';
import Athority from '../Athority/Athority';

function App() {
  const [language, setLanguage] = useState(Language.En);

  const switchLanguage = (language: Language) => {
    setLanguage(language);
  };

  const pageName = {
    welcome: UIStrings.Welcome[language],
    login: UIStrings.Login[language],
    editor: UIStrings.Editor[language],
  };

  const athority = new Athority();

  return (
    <DataContextProvider
      value={{
        language: language,
        setLanguage: switchLanguage,
        pageName: pageName,
        athority,
      }}
    >
      <div className={styles['container']}>
        <Header />
        <div className={styles['content']}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path={`/${pageName.welcome}`} element={<WelcomePage />} />
            <Route path={`/${pageName.login}`} element={<LoginPage />} />
            <Route path={`/${pageName.editor}`} element={<EditorPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </DataContextProvider>
  );
}

export default App;
