const comments = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      const { postId, author, comment } = action;
      const comments = state[postId] || [];

      return {
        ...state,
        [postId]: [
          ...comments,
          {
            user: author,
            text: comment
          }
        ]
      };

    case "REMOVE_COMMENT":
      const { i } = action;

      const updatedComments = state[action.postId].filter(
        (comment, index) => index !== i
      );

      return {
        ...state,
        [action.postId]: updatedComments
      };

    default:
      return state;
  }
};

export default comments;
