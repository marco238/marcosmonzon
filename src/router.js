import { Router } from '@vaadin/router';

import './components/main-view';

/**
 * Defines the App routes
 * @param {object} HTML node to host components 
 */
export const initRouter = (node) => {
  const router = new Router(node);

  router.setRoutes([
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: 'main-view',
    },
    // {
    //   path: '/training',
    //   component: 'training-view',
    //   action: () =>
    //     import('./views/training/'),
    // },
    // {
    //   path: '(.*)',
    //   component: 'view-404',
    //   action: () =>
    //     import('./views/view-404.js'),
    // },
  ]);
}
