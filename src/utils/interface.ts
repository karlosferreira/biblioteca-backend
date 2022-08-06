import Express from 'express';
import { Send, Query } from 'express-serve-static-core';

export interface IBody<T> extends Express.Request {
    body: T
}

export interface IQuery<T extends Query> extends Express.Request {
    query: T
}

export interface IRequest<T extends Query, U> extends Express.Request {
    body: U,
    query: T
}

export interface IResponse<ResBody> extends Express.Response {
    json: Send<ResBody, this>;
}
