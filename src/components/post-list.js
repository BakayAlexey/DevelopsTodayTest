import React from 'react';
import PostItem from './post-item';

const PostList = props => {
  const { postData } = props;
  const postList = postData.map(post => <PostItem key={post.id} post={post} />);

  return <ul>{postList}</ul>;
};

export default PostList;
