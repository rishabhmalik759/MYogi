export interface IState {
  loginModal: boolean;
  signupModal: boolean;
}

const initialState: IState = {
  loginModal: false,
  signupModal: false,
};

export default initialState;
