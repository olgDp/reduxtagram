import React, { Component } from "react";

class Comments extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const { postId, addComment } = this.props;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    addComment(postId, author, comment);

    // reset form for clear inputs
    this.refs.commentForm.reset();
  };

  render() {
    const { postId, postComments, removeComment } = this.props;

    return (
      <div className="comments">
        {postComments.map(({ user, text }, i) => {
          return (
            <div className="comment" key={i}>
              <p>
                <strong>{user}</strong>
                {text}

                <button
                  onClick={() => removeComment(postId, i)}
                  className="remove-comment"
                >
                  &times;
                </button>
              </p>
            </div>
          );
        })}

        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input ref="author" type="text" placeholder="author" />
          <input ref="comment" type="text" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
