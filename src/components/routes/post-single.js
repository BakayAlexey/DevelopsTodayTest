import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loadPostByIdWithComments } from '../../AC';
import {
  loadedPostsSelector,
  loadingPostsSelector,
  postMapSelector
} from '../../selectors';
import CommentList from '../comment-list';
import { BtnLink, BtnsWrapper } from '../../ui/btn';

const PostBody = styled.div`
  margin-bottom: 15px;
`;

class PostSingle extends Component {
  componentDidMount() {
    const { loading, loaded, loadPostByIdWithCommentsAction } = this.props;
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    if (!loaded && !loading) {
      loadPostByIdWithCommentsAction(postId);
    }
  }

  render() {
    const { post } = this.props;
    const {
      match: {
        params: { postId }
      }
    } = this.props;

    if (!post) {
      return <div>No data!</div>;
    }

    const {
      post: { title, body }
    } = this.props;

    return (
      <div>
        <BtnsWrapper>
          <BtnLink to="/posts">To Post List</BtnLink>
        </BtnsWrapper>
        <h1>{title}</h1>
        <PostBody>{body}</PostBody>
        <CommentList postId={postId} />
      </div>
    );
  }
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { postId }
    }
  }
) => ({
  post: postMapSelector(state, postId),
  loading: loadingPostsSelector(state),
  loaded: loadedPostsSelector(state)
});

const mapDispatchToProps = {
  loadPostByIdWithCommentsAction: loadPostByIdWithComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSingle);
