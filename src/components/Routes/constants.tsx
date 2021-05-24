/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';

import PATHS from './paths';

const Home = lazy(() => import('screens/Home'));

export const ROUTES = [
  {
    exact: false,
    path: PATHS.home,
    component: Home,
    title: 'Routes:homeTitle',
    description: 'Routes:homeDescription'
  }
];
