
const types = {
  FINISH_INTRO: 'FINISH_INTRO',
};

export const actions = {
  // introduction
  finishIntro: () => ({ type: types.FINISH_INTRO }),

};

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  authUser: {},
  statusIntro: null,
  token: null,
  firebaseToken: null,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // const {  } = state;

  switch (type) {
    case types.FINISH_INTRO:
      return {
        ...state,
        statusIntro: true,
      };

    default: {
      return state;
    }
  }
};
