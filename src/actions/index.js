import { API_URL } from '../constants/';

export function openAnImage(img) {
  return {
    type: 'IMAGE_OPENED',
    selectedImage: img
  }
}

export function searchClickedAction(url) {
  return {
    type: 'SEARCH_CLICKED',
    url
  }
}

export function fetchImages(images) {
  return {
    type: 'FETCH_IMAGES',
    images: images.hits
  }
}

export function fetchAPI(url) {
  return dispatch => {
    dispatch(searchClickedAction(url))
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(fetchImages(json)))
  }
}

export function updateSearchText(e){
  return {
    type: 'UPDATE_TEXT',
    url: API_URL + encodeURIComponent(e.target.value)
  }
}