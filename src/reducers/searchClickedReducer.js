export default function(state=null, action) {
  switch(action.type) {
    case 'SEARCH_CLICKED': 
      {
        console.log('SEARCH_CLICKED');
        return action.payload;
      }
     // return actopn.payload
  }
  return state;
}