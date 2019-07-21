import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost } from '../AC';
import { postMapSelector } from '../selectors';
import { Btn, BtnLink, BtnsWrapper } from '../ui/btn';
import { Textarea, FormField, FormFieldDescr } from '../ui/form';

class PostEdit extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    const {
      post: { title, body }
    } = this.props;
    this.setState({
      title,
      body
    });
  }

  changeTitleHandler = e => {
    this.setState({
      title: e.target.value
    });
  };

  changeBodyHandler = e => {
    const { value } = e.target;
    this.setState({
      body: value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    const { title, body } = this.state;
    const { editPostAction } = this.props;
    if (title.trim() !== '' && body.trim() !== '') {
      editPostAction(postId, title, body);
    }
  };

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <BtnsWrapper>
          <BtnLink to="/posts">To Post List</BtnLink>
        </BtnsWrapper>

        <form onSubmit={this.submitHandler}>
          <FormField>
            <FormFieldDescr>Title</FormFieldDescr>
            <Textarea
              name="title"
              onChange={this.changeTitleHandler}
              value={title}
            />
          </FormField>
          <FormField>
            <FormFieldDescr>Body</FormFieldDescr>
            <Textarea
              name="body"
              onChange={this.changeBodyHandler}
              value={body}
            />
          </FormField>

          <BtnsWrapper>
            <Btn type="submit">Edit Post</Btn>
          </BtnsWrapper>
        </form>
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
  post: postMapSelector(state, postId)
});

const mapDispatchToProps = { editPostAction: editPost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit);
