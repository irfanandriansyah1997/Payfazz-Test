/**
 * Storybook Main Project
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Template from 'storybook-template/default-template/default-template.component';

storiesOf('Atomic Component', module).add(
    'Badges',
    () => (
        <Template componentName="Badges" description="asasa">
            Hello 1 2 3
        </Template>
    ),
    {
        notes: 'ini notes'
    }
);
