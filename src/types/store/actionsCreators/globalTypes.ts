import { Action } from 'redux';

export type ReqType = 'mutation' | 'query';

export interface IMeta {
    type: string;
    reqString: any;
    reqType: ReqType;
}

export interface IAction extends Action {
    meta?: IMeta;
}
