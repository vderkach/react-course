export default function(state=null, action) {
 // console.log("searchReducer action");
  //console.log(action);
  switch(action.type) {
    case 'SEARCH_CLICKED': {
      console.log('searchReducer SEARCH_CLICKED');
      console.log(action);
      return action.url;
    }
  }
  return state;
}