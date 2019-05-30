/**
 * Loading Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.30
 */

import * as React from 'react';
import { render } from 'enzyme';
import Loading from './loading.component';

require('config/enzyme.config');

describe('Testing loading component in atomic component ', () => {
    it('Test render icon material component', () => {
        const icon = render(<Loading />);

        expect(icon.hasClass('ui-atomic-loading')).toBe(true);
    });
});
