import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import "./PhotoGrid.css";
import Photo from "./Photo";

const PhotoGrid = props => {
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => {
        const { id, ...photoInfo } = post;

        return <Photo key={id} i={i} {...props} {...photoInfo} />;
      })}
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
)(PhotoGrid);
