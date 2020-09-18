import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { userReducer } from './userReducer';
import { appCurrentReducer } from './appReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  userState: userReducer,
  appCurrent: appCurrentReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
