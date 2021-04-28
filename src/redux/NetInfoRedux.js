import NetInfo from '@react-native-community/netinfo';
import { toast } from '../Omni';
import { Languages } from '../common';

const types = {
  UPDATE_CONNECTION_STATUS: 'UPDATE_CONNECTION_STATUS',
  SUBSCRIBED_CONNECTION_STATUS: 'SUBSCRIBED_CONNECTION_STATUS',
};

export const actions = {
  updateConnectionStatus: (isConnected) => ({
    type: types.UPDATE_CONNECTION_STATUS,
    isConnected,
  }),
  renewConnectionStatus: () => (dispatch) => {
    NetInfo.fetch().then((status) =>
      dispatch({
        type: types.UPDATE_CONNECTION_STATUS,
        isConnected: status.isConnected,
      }),
    );
  },
  subscribeToConnectionStatus: () => (dispatch, getState) => {
    const { netInfoReducer } = getState();
    if (!netInfoReducer.subscribed) {
      NetInfo.addEventListener((status) => {
        if (netInfoReducer.isConnected !== status.isConnected) {
          // if (!status.isConnected) {
          //   toast('KHÔNG CÓ KẾT NỐI INTERNET');
          // }
          dispatch(actions.updateConnectionStatus(status.isConnected));
        }
      });
      dispatch(actions.subscribedToConnectionStatus);
    }
  },
  subscribedToConnectionStatus: {
    type: types.SUBSCRIBED_CONNECTION_STATUS,
  },
};

const initialState = {
  isConnected: true,
  subscribed: false,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.UPDATE_CONNECTION_STATUS:
      return {
        ...state,
        isConnected: action.isConnected,
      };
    case types.SUBSCRIBED_CONNECTION_STATUS:
      return {
        ...state,
        subscribed: true,
      };
    default:
      return state;
  }
};
