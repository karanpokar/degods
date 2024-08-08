import { BOOKMARKS } from "./action";


const defaultState = {
  bookmarks:[],
};

const Reducer = (state = defaultState, action) => {
  //console.log('Action',action)
  switch (action.type) {
    case BOOKMARKS:
      return {...state, bookmarks: action.payload};
    default:
      //console.log('Default Again');
      return {
        ...state,
      };
  }
};
export default Reducer;
