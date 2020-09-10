//Modal Action Types
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export type HIDE_MODAL = typeof HIDE_MODAL;
export type SHOW_MODAL = typeof SHOW_MODAL;

//Loading
export const LOAD_APP_LOADING = 'LOAD_APP_LOADING';
export type LOAD_APP_LOADING = typeof LOAD_APP_LOADING;

//Authentication
export const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN';
export type GOOGLE_SIGN_IN = typeof GOOGLE_SIGN_IN;

//Combined export
type Types = LOAD_APP_LOADING | SHOW_MODAL | HIDE_MODAL;
export default Types;
