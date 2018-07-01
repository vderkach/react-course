export default function(state=null, action) {
  //console.log('openeImageReducer inside');
  //console.log(action);
  switch(action.type) {
    case 'IMAGE_OPENED': {
      console.log('openeImageReducer IMAGE_OPENED');
      console.log(true);
      return true;
    }
    case 'IMAGE_CLOSED': {
      console.log('openeImageReducer IMAGE_CLOSED');
      console.log(false);
      return false;
    }
  }
  return state;
}