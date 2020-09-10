import * as types from '../types';
import { ActionCreator, Action } from 'redux';

//Modal
export interface IAuthActions extends Action {
  type: types.GOOGLE_SIGN_IN;
}
