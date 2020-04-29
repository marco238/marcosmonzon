import { Router } from '@vaadin/router';

import './views/main-view';

/**
 * Defines the App routes
 * @param {object} HTML node to host components 
 */
export const initRouter = (node) => {
  const router = new Router(node);
  router.baseUrl = '/marcomonzon'

  router.setRoutes([
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: 'main-view',
    },
    {
      path: '/work',
      component: 'work-view',
      action: () =>
        import('./views/work-view/work-view.js'),
    },
    {
      path: '/about',
      component: 'about-view',
      action: () =>
        import('./views/about-view.js'),
    },
    {
      path: '(.*)',
      component: 'view-404',
      action: () =>
        import('./views/view-404.js'),
    },
  ]);
};
