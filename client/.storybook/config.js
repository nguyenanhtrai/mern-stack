import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import '../src/assets/scss/_style.scss';

const req = require.context('../src/', true, /.stories\..sx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => (
  <div>
    {story()}
  </div>
));

configure(loadStories, module);

const settingsRoot = document.createElement('div');
settingsRoot.setAttribute('id', 'stories');
document.body.append(settingsRoot);
