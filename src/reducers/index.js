import { combineReducers } from 'redux';

import imageReducer from './imageReducer';
import openedImageReducer from './openedImageReducer';
import searchClickedReducer from './searchClickedReducer';

const rootReducer = combineReducers({
	images: imageReducer,
	openedImage: openedImageReducer,
	searchClicked: searchClickedReducer
});

export default rootReducer;