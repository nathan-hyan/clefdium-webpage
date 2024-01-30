import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';

import NavigationBar from '~components/NavigationBar';
import { ROUTES } from '~constants/routes';
import Language from '~contexts/Language';
import GlobalModal from '~contexts/Modal';

import '~scss/application.scss';
import styles from './styles.module.scss';

import '~config/i18n';

import.meta.glob('/src/**/i18n.ts', { eager: true });

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Language>
        <div className={styles.container}>
          <GlobalModal>
            <NavigationBar changeLanguage={() => {}} />
            <Outlet />
          </GlobalModal>
        </div>
      </Language>
    ),
    children: ROUTES.map((route) => route),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
