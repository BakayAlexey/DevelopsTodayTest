import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './post-item';
import { loadAllPosts } from '../AC';
import {
  loadedPostsSelector,
  loadingPostsSelector,
  postListSelector
} from '../selectors';
import { BtnLink, BtnsWrapper } from '../ui/btn';

class PostList extends Component {
  componentDidMount() {
    const { loading, loaded, loadAllPostsAction } = this.props;
    if (!loaded && !loading) {
      loadAllPostsAction();
    }
  }

  render() {
    const { postData, loaded, loading } = this.props;

    if (!loaded || loading || !postData || postData.size === 0) {
      return <div>No data</div>;
    }

    const postList = postData.map(post => (
      <PostItem key={post.id} post={post} />
    ));

    return (
      <div>
        <BtnsWrapper>
          <BtnLink to="/posts/add">Add Post</BtnLink>
        </BtnsWrapper>
        <ul>{postList}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postData: postListSelector(state),
  loading: loadingPostsSelector(state),
  loaded: loadedPostsSelector(state)
});

const mapDispatchToProps = {
  loadAllPostsAction: loadAllPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
