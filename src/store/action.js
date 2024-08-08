
export const BOOKMARKS = 'BOOKMARKS';



export const setBookmarks = bookmarks => {
    return {
      type: BOOKMARKS,
      payload: bookmarks,
    };
  };
