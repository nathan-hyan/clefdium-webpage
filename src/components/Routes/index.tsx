import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { LangContext } from 'contexts/Language';
import NavigationBar from 'components/NavigationBar';
import LoadingScreen from 'components/LoadingScreen';

import Suspense from '../Suspense';

import { ROUTES } from './constants';
import RouteItem from './components/RouteItem';
import styles from './styles.module.scss';

function Routes() {
  const language = useContext(LangContext);
  const changeLang = (lang: string) => {
    language.setLanguage(lang);
  };

  return (
    <Router>
      <div className={styles.container}>
        <Suspense fallback={LoadingScreen}>
          <NavigationBar changeLanguage={changeLang} />
          <Switch>
            {ROUTES.map(({ path, ...config }) => (
              <RouteItem key={path} path={path} {...config} />
            ))}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default Routes;
