export default function(state=null, action) {
 // console.log("searchReducer action");
  //console.log(action);
  switch(action.type) {
    case 'UPDATE_TEXT': {
      console.log('updateTextReducer UPDATE_TEXT');
      console.log(action);
      return action.url;
    }
  }
  return state;
}