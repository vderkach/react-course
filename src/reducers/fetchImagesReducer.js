export default function(state=null, action) {
  switch(action.type) {
    case 'FETCH_IMAGES': {
      console.log('fetchImagesReducer FETCH_IMAGES');
      console.log(action);
      return action.images;
    }
  }
  return state;
}