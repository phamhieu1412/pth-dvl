import { persistCombineReducers } from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import { reducer as ToastReducer } from './ToastRedux';

import { Constants } from '../common';

const config = {
  key: `${Constants.bundleId}-root`,
  storage: FilesystemStorage,
  blacklist: ['toast'],
};

export default persistCombineReducers(config, {
  toast: ToastReducer,
});
