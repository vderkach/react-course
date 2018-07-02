export default function(state=null, action) {
  switch(action.type) {
    case 'IMAGE_OPENED': {
      return action.selectedImage;
    }
    default:
      return state;
  }
}