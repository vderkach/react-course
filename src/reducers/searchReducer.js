// Used when he user clicks on search button

export default function(state=null, action) {
  switch(action.type) {
    case 'SEARCH_CLICKED': {
      return action.url;
    }
    default:
      return state;
  }
}