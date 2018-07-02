// Reducer which updates the text for searching

export default function(state=null, action) {
  switch(action.type) {
    case 'UPDATE_TEXT': {
      return action.url;
    }
    default:
    	return state;
  }
}