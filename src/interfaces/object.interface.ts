import { ReactNode } from 'react';

export interface DefaultPropsInterface {
    children?: ReactNode;
}

export interface DefaultDynamicObject {
    [key: string]: any;
}

export interface DefaultDynamicArrayList extends DefaultDynamicObject {
    [key: string]: any;
}
