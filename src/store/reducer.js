import { BOOKMARKS } from "./action";


const defaultState = {
  
  booksmarks:[],
};

const Reducer = (state = defaultState, action) => {
  //console.log('Action',action)
  switch (action.type) {
    case BOOKMARKS:
      return {...state, booksmarks: action.payload};
    default:
      //console.log('Default Again');
      return {
        ...state,
      };
  }
};
export default Reducer;
