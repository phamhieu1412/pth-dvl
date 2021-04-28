import { persistCombineReducers } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import { reducer as ToastReducer } from './ToastRedux';
import { reducer as AuthReducer } from './AuthRedux';
import { reducer as NetInfoReducer } from './NetInfoRedux';

import { Constants } from '../common';

const config = {
  key: `${Constants.bundleId}-root`,
  storage: FilesystemStorage,
  blacklist: ['toast', 'netInfo'],
};

export default persistCombineReducers(config, {
  toast: ToastReducer,
  auth: AuthReducer,
  netInfo: NetInfoReducer,
});
