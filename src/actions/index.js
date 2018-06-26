export function openAnImage(image) {
  return {
    type: 'IMAGE_OPENED',
    payload: image
  }
}

export function fetchAPI() {
  return {
    type: 'FETCH_API',
    payload: response
  }
}