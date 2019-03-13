import React, { Component } from "react";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group";
import "./Photo.css";

class Photo extends Component {
  render() {
    const {
      i,
      code,
      caption,
      display_src,
      likes,
      comments,
      increment
    } = this.props;
    // const randomImageUrl = "https://source.unsplash.com/random";

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${code}`}>
            <img src={display_src} alt={caption} className="grid-photo" />
          </Link>

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={likes} className="likes-heart">
              {likes}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>{caption}</figcaption>

        <div className="control-buttons">
          <button onClick={() => increment(i)} className="likes">
            &hearts; {likes}
          </button>
          <Link className="button" to={`/view/${code}`}>
            <span className="comment-count">
              <span className="speech-bubble" />
              {comments[code] ? comments[code].length : 0}
            </span>
          </Link>
        </div>
      </figure>
    );
  }
}

export default Photo;
