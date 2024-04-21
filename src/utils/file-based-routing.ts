import React from 'react';
import { PageMeta } from '../types';

/**
 * Inspired by https://omarelhawary.me/blog/file-based-routing-with-react-router/
 */

const PAGES = import.meta.glob('../pages/*.tsx');

export const ROUTES: ({
  path: string;
  component: React.ComponentType;
} & PageMeta)[] = [];

export const loadRoutesPromise = (async () => {
  if (ROUTES.length) return;
  await Promise.all(
    Object.keys(PAGES).map(async path => {
      const module = (await PAGES[path]()) as {
        default: React.ComponentType & { title?: string };
        META?: PageMeta;
      };
      const routePath = path.replace('../pages', '').replace('.tsx', '');
      ROUTES.push({
        path: routePath,
        component: module.default,
        title: module.default.title || routePath.replace('/', ''),
        ...(module.META || {}),
      });
    }),
  );
})();
