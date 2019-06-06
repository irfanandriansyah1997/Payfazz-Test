/**
 * Getting Started Page
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import NotFound from '@/pages/listing/components/molecules/not-found/not-found.component';

class ListingPage extends React.PureComponent {
    render(): React.ReactNode {
        return (
            <div className="ui-pages-listing">
                <NotFound />
            </div>
        );
    }
}

export default ListingPage;
