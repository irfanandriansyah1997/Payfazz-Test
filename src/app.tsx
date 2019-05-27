import * as React from 'react';
import * as ReactDOM from 'react-dom';

let a: any = {
    data: 'asasa'
};
a = {
    ...a,
    hai: 'asasas'
};
console.log(a);

ReactDOM.render(<div>Hello Worlds</div>, document.getElementById('app'));
