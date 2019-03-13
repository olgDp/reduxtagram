import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import "./Single.css";

import Photo from "./Photo";
import Comments from "./Comments";

const Single = props => {
  const { posts, comments, match, addComment, removeComment } = props;
  const { postId } = match.params;
  // index of the post
  const i = posts.findIndex(post => post.code === postId);

  // get us the post
  const post = posts[i];

  // get us the comments for post
  const postComments = comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} {...post} {...props} />
      <Comments
        postComments={postComments}
        postId={postId}
        addComment={addComment}
        removeComment={removeComment}
      />
    </div>
  );
};

const mapStateToProps = ({ posts, comments }) => {
  return {
    posts,
    comments
  };
};

export default connect(
  mapStateToProps,
  actionCreators
)(Single);
