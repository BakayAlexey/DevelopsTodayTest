import React from 'react';

const PostItem = ({ post: { title, body } }) => (
  <li>
    <div>{title}</div>
    <div>{body}</div>
  </li>
);

export default PostItem;
