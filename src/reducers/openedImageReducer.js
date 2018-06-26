export default function(state=null, action) {
  switch(action.type) {
    case 'IMAGE_OPENED': 
      {
        console.log('IMAGE_OPENED');
        return action.payload;
      }
     // return actopn.payload
  }

  return state;
}