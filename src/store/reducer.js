import { BOOKMARKS,COLLECTION } from "./action";


const defaultState = {
  bookmarks:[],
  collectionData:{}
};

const Reducer = (state = defaultState, action) => {
  //console.log('Action',action)
  switch (action.type) {
    case BOOKMARKS:
      return {...state, bookmarks: action.payload};
      case COLLECTION:
        return {...state, collectionData: action.payload};
    default:
      //console.log('Default Again');
      return {
        ...state,
      };
  }
};
export default Reducer;
