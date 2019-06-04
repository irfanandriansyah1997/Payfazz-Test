/**
 * Getting Started Page
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';

import './style/style.scss';
import Text from '@/component/atoms/text/text.component';
import Button from '@/component/atoms/button/button.component';
import { Link } from 'react-router-dom';

const GettingStartedPage = () => (
    <div className="ui-pages-getting-started">
        <Text
            TextType="h1"
            align="center"
            as="h1"
        >
            Smart
            <span>Listing</span>
        </Text>
        <Text
            TextType="meta"
            align="center"
            color="#636d7a"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Text>
        <img
            src="https://i.ibb.co/6PRBKK2/getting-started.png"
            alt="getting-started"
        />
        <div className="ui-pages-getting-started__action">
            <Button
                as={Link}
                to="/login"
                buttonType="primary"
            >
                Login
            </Button>
            <Button
                as={Link}
                to="/signup"
                buttonType="tertiary"
                shadow
            >
                Sign Up
            </Button>
        </div>
    </div>
);

export default GettingStartedPage;
