import { combineReducers } from 'redux';

import galleryReducer from './galleryReducer';

const rootReducer = combineReducers({
  reducer: galleryReducer
});

export default rootReducer;