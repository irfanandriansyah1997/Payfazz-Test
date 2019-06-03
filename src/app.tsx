import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from '@/component/themes/default';
import DeleteDialog from '@/component/molecules/delete-dialog/delete-dialog.component';

import '@/styles/scss/app.scss';
import { DefaultPropsInterface } from '@/interfaces/object.interface';

interface StateTypes {
    show?: boolean;
}

class Sample extends React.Component<DefaultPropsInterface, StateTypes> {
    constructor(props: DefaultPropsInterface) {
        super(props);

        this.state = {
            show: false
        };
    }

    render() {
        const { show } = this.state;

        return (
            <ThemeProvider theme={theme}>
                <div style={{ padding: '20px' }}>
                    <h1>Hai</h1>
                    <button
                        onClick={() => this.setState({ show: !show })}
                        type="submit"
                    >
                        Toggle 1
                    </button>
                    <DeleteDialog
                        show={show}
                        onAccept={() => this.setState({ show: false })}
                        onCancel={() => this.setState({ show: false })}
                    />
                </div>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(
    <Sample />,
    document.getElementById('app')
);
