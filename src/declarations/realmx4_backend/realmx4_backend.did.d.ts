import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface ResponseData { 'status' : boolean, 'data' : string }
export interface ResponseDataAllFiles {
  'status' : boolean,
  'data' : Array<[string, string]>,
}
export interface ResponseDataAllQuestions {
  'status' : boolean,
  'data' : Array<[string, string]>,
}
export interface ResponseDataDeleteQuestion {
  'status' : boolean,
  'data' : string,
}
export interface _SERVICE {
  'addQuestion' : ActorMethod<[string, string], ResponseData>,
  'deleteQuestion' : ActorMethod<[string], ResponseDataDeleteQuestion>,
  'getAllFiles' : ActorMethod<[], ResponseDataAllFiles>,
  'getAllQuestions' : ActorMethod<[], ResponseDataAllQuestions>,
  'getFile' : ActorMethod<[string], ResponseData>,
  'getQuestion' : ActorMethod<[string], ResponseData>,
  'saveFile' : ActorMethod<[string, string], ResponseData>,
  'saveFile1' : ActorMethod<[string, string], ResponseData>,
  'tokeninit' : ActorMethod<
    [string, string, string, number, bigint, Principal, bigint],
    Principal
  >,
}
