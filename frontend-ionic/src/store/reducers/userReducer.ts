import { IUser } from '../types/firebase';
import * as types from '../types';
import { Reducer } from 'react';
import { IUserActions } from '../actions/userActions';

const initialUserState: IUser = {
  uid: '',
  name: '',
  type: 'rookie',
  avatar: '',
  email: '',
  country: '',
  paid_user: false,
  group_id: '',
  current_membership: {
    membership_id: '',
    type: '',
    begin_date: new Date(),
    end_date: new Date(),
  },
  membership_history: [
    {
      membership_id: '',
      type: '',
      begin_date: new Date(),
      end_date: new Date(),
    },
  ],
};

export const userReducer: Reducer<IUser, IUserActions> = (
  state = initialUserState,
  action
): IUser => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_USER:
      if (payload) {
        return {
          ...state,
          uid: payload.uid,
          name: payload.name,
          type: payload.type,
          avatar: payload.avatar,
          email: payload.email,
          level: payload.level,
        };
      } else return state;
    case types.REMOVE_USER:
      return {
        ...state,
        uid: '',
        name: '',
        type: 'rookie',
        avatar: '',
        email: '',
        country: '',
        paid_user: false,
        group_id: '',
        current_membership: {
          membership_id: '',
          type: '',
          begin_date: new Date(),
          end_date: new Date(),
        },
        membership_history: [
          {
            membership_id: '',
            type: '',
            begin_date: new Date(),
            end_date: new Date(),
          },
        ],
      };
    default:
      return state;
  }
};
