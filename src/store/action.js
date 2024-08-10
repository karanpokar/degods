
export const BOOKMARKS = 'BOOKMARKS';
export const COLLECTION='COLLECTION'


export const setBookmarks = bookmarks => {
    return {
      type: BOOKMARKS,
      payload: bookmarks,
    };
  };
  export const setCollectionData = data => {
    return {
      type: COLLECTION,
      payload: data,
    };
  };
