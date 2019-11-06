import { Router } from '@vaadin/router';

import './views/main-view';

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
      animate: true,
      component: 'main-view',
    },
    {
      path: '/work',
      animate: true,
      component: 'work-view',
      action: () =>
        import('./views/work-view/work-view.js'),
    },
    {
      path: '(.*)',
      animate: true,
      component: 'view-404',
      action: () =>
        import('./views/view-404.js'),
    },
  ]);
};
