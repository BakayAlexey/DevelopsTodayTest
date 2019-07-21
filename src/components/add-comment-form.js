import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../AC';
import { Btn, BtnsWrapper } from '../ui/btn';
import { Textarea, FormField, FormFieldDescr } from '../ui/form';

class AddCommentForm extends Component {
  state = {
    body: ''
  };

  changeBodyHandler = e => {
    const { value } = e.target;
    this.setState({
      body: value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const { body } = this.state;
    const { addCommentAction, postId } = this.props;
    if (body.trim() !== '') {
      addCommentAction(postId, body);
    }
  };

  render() {
    const { body } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <FormField>
            <FormFieldDescr>Body</FormFieldDescr>
            <Textarea
              name="body"
              onChange={this.changeBodyHandler}
              value={body}
            />
          </FormField>

          <BtnsWrapper>
            <Btn type="submit">Add Comment</Btn>
          </BtnsWrapper>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addCommentAction: addComment };

export default connect(
  null,
  mapDispatchToProps
)(AddCommentForm);
