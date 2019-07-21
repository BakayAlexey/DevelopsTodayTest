import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deletePost } from '../AC';
import { Btn, BtnLink, BtnsWrapper } from '../ui/btn';

const PostBody = styled.div`
  margin-bottom: 15px;
`;

const StPostItem = styled.li`
  margin-bottom: 15px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

class PostItem extends Component {
  deleteHandler = () => {
    const { deletePostAction } = this.props;
    const {
      post: { id }
    } = this.props;

    deletePostAction(id);
  };

  render() {
    const {
      post: { id, title, body }
    } = this.props;

    const postDescr = body.length > 50 ? `${body.slice(0, 50)}...` : body;

    return (
      <StPostItem>
        <h3>{title}</h3>
        <PostBody>{postDescr}</PostBody>
        <BtnsWrapper>
          <BtnLink to={`/posts/${id}`}>Read more</BtnLink>
          <BtnLink to={`/posts/edit/${id}`}>Edit</BtnLink>
          <Btn type="button" onClick={this.deleteHandler}>
            Delete
          </Btn>
        </BtnsWrapper>
      </StPostItem>
    );
  }
}

const mapDispatchToProps = {
  deletePostAction: deletePost
};

export default connect(
  null,
  mapDispatchToProps
)(PostItem);
