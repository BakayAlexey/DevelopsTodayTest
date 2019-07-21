import React from 'react';

const Post = props => {
  const {
    post: { title, body }
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <div>{body}</div>
    </div>
  );
};

export default Post;
