import React from 'react';

const CommentList = props => {
  const { comments } = props;
  const commentList = comments.map(({ id, body }) => <li key={id}>{body}</li>);

  return <ul>{commentList}</ul>;
};

export default CommentList;
