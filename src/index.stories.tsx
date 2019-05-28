/**
 * Storybook Main Project
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Atomic Component', module).add('Badges', () => <h1>Hello World</h1>, {
    notes: 'ini notes'
});
