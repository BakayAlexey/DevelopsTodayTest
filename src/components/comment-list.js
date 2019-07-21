import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import {
  commentsSelector,
  loadingCommentsSelector,
  loadedCommentsSelector
} from '../selectors';
import { loadPostByIdWithComments } from '../AC';
import AddCommentForm from './add-comment-form';

const Comments = styled.ul`
  margin-bottom: 25px;
`;

class CommentList extends Component {
  componentDidMount() {
    const {
      loading,
      loaded,
      loadPostByIdWithCommentsAction,
      postId
    } = this.props;
    if (!loaded && !loading) {
      loadPostByIdWithCommentsAction(postId);
    }
  }

  render() {
    const { postId, comments } = this.props;
    const commentList =
      !comments || comments.length === 0
        ? null
        : comments.map(({ id, body }) => <li key={id}>{body}</li>);

    return (
      <div>
        <h2>Comments</h2>
        <Comments>{commentList}</Comments>
        <AddCommentForm postId={postId} key={comments} />
      </div>
    );
  }
}

const mapStateToProps = (state, { postId }) => ({
  loading: loadingCommentsSelector(state, postId),
  loaded: loadedCommentsSelector(state, postId),
  comments: commentsSelector(state, postId)
});

const mapDispatchToProps = {
  loadPostByIdWithCommentsAction: loadPostByIdWithComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
