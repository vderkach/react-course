import { combineReducers } from 'redux';

import openedImageReducer from './openedImageReducer';
import searchReducer from './searchReducer';
import fetchImagesReducer from './fetchImagesReducer';
import updateTextReducer from './updateTextReducer';

const rootReducer = combineReducers({
	images: fetchImagesReducer,
	selectedImage: openedImageReducer,
	url: updateTextReducer
});

export default rootReducer;