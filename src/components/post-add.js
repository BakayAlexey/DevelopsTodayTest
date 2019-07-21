import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../AC';
import { Btn, BtnLink, BtnsWrapper } from '../ui/btn';
import { Textarea, FormField, FormFieldDescr } from '../ui/form';

class PostEdit extends Component {
  state = {
    title: '',
    body: ''
  };

  changeTitleHandler = e => {
    const { value } = e.target;
    this.setState({
      title: value
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
    const { title, body } = this.state;
    const { addPostAction } = this.props;
    if (title.trim() !== '' && body.trim() !== '') {
      addPostAction(title, body);
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
            <Btn type="submit">Add Post</Btn>
          </BtnsWrapper>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addPostAction: addPost };

export default connect(
  null,
  mapDispatchToProps
)(PostEdit);
