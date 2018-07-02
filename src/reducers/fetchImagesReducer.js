export default function(state=null, action) {
  switch(action.type) {
    case 'FETCH_IMAGES': {
      return action.images;
    }
    default:
      return state;
  }
}