import { API_URL } from '../constants/';
import * as actions from '../constants/actions';

export function openAnImage(img) {
  return {
    type: actions.IMAGE_OPENED,
    selectedImage: img
  }
}

export function searchClickedAction(url) {
  return {
    type: actions.SEARCH_CLICKED,
    url
  }
}

export function fetchImages(images) {
  return {
    type: actions.FETCH_IMAGES,
    images: images.hits
  }
}

export function nextPageClick() {
  console.log('nextPageClick');
  return {
    type: actions.NEXT_PAGE
  }
}

export function prevPageClick() {
  console.log('prevPageClick');
  return {
    type: actions.PREV_PAGE
  }
}

export function startFetching() {
  console.log('startFetching');
  return {
    type: actions.START_FETCHING
  }
}

export function finishFetching() {
  console.log('finishFetching');
  return {
    type: actions.FINISH_FETCHING
  }
}

export function fetchAPI(url) {
  return (dispatch, getState) => {
    const state = getState().reducer;
    dispatch(startFetching());
    const result = fetch(API_URL + state.query + '&page=' + state.currentPage)
      .then(response => response.json())
      .then(json => dispatch(fetchImages(json)), err => dispatch(finishFetching()));
    return result;
  }
}

export function updateSearchText(e){
  return {
    type: actions.UPDATE_TEXT,
    query: encodeURIComponent(e.target.value)
  }
}

export function reset() {
  return {
    type: actions.RESET
  }
}