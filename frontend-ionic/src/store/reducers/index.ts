import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  userState: userReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
