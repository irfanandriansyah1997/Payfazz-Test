import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from '@/component/themes/default';
import Dialog from '@/component/atoms/dialog/dialog.component';

import '@/styles/scss/app.scss';
import { DefaultPropsInterface } from '@/interfaces/object.interface';

interface StateTypes {
    show?: boolean;
    show2?: boolean;
}

class Sample extends React.Component<DefaultPropsInterface, StateTypes> {
    constructor(props: DefaultPropsInterface) {
        super(props);

        this.state = {
            show: false,
            show2: false
        };
    }

    render() {
        const { show, show2 } = this.state;

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
                    <button
                        onClick={() => this.setState({ show2: !show2 })}
                        type="submit"
                    >
                        Toggle 2
                    </button>
                    <Dialog
                        show={show}
                        onCloseDialog={() => this.setState({ show: false })}
                    >
                        <img src="https://i.ibb.co/pbThLXd/delete.png" alt="" />
                    </Dialog>
                    <Dialog
                        show={show2}
                        type="snackbar"
                        onCloseDialog={() => this.setState({ show2: false })}
                    >
                        Hai
                    </Dialog>
                </div>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(
    <Sample />,
    document.getElementById('app')
);
