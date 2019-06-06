import { DefaultDynamicObject } from './object.interface';

export interface ReducerInterface {
    type: string;
    payload: DefaultDynamicObject;
}
