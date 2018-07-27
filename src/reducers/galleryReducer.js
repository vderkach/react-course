import * as actions from '../constants/actions';
import * as reducers from '../constants/reducers';

export default function(state=reducers.defaultState, action) {
  switch(action.type) {
    case actions.FETCH_IMAGES: {
      return Object.assign({}, state, {
        images: action.images,
        totalImages: action.totalHits
      });
    }
    case actions.IMAGE_OPENED: {
      return Object.assign({}, state, {
        selectedImage: action.selectedImage
      });
    }
    case actions.UPDATE_TEXT: {
      return Object.assign({}, state, {
        query: action.query
      });
    }
    case actions.NEXT_PAGE: {
      return Object.assign({}, state, {
        currentPage: state.currentPage + 1
      });
    }
    case actions.PREV_PAGE: {
      return Object.assign({}, state, {
        currentPage: (state.currentPage > 1) ? state.currentPage - 1 : state.currentPage
      });
    }
    case actions.RESET: {
      return Object.assign({}, state, {
        currentPage: 1,
        selectedImage: ''
      });
    }
    case actions.START_FETCHING: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case actions.FINISH_FETCHING: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    default:
      return state;
  }
}