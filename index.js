import { createElement as h, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import propsify from '@drupal-jsx/propsify/strict';
import { main as _main } from '@drupal-jsx/drupal-utils';

const render = (App, container) => {
  const root = createRoot(container);
  root.render(App);
}

export function main({ components }) {
  _main({ components, propsify, h, Fragment, render });
}
