import { push } from 'connected-react-router';
import axios from 'axios';
import {
  LOAD_ALL_POSTS_START,
  LOAD_ALL_POSTS_SUCCESS,
  LOAD_ALL_POSTS_ERROR,
  LOAD_POST_START,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR
} from '../constatns/actions';

export function loadAllPosts() {
  return dispatch => {
    dispatch({
      type: LOAD_ALL_POSTS_START
    });

    axios
      .get('https://simple-blog-api.crew.red/posts')
      .then(res =>
        dispatch({
          type: LOAD_ALL_POSTS_SUCCESS,
          payload: { data: res.data }
        })
      )
      .catch(error =>
        dispatch({
          type: LOAD_ALL_POSTS_ERROR,
          error
        })
      );
  };
}

export function loadPostByIdWithComments(id) {
  return dispatch => {
    dispatch({
      type: LOAD_POST_START,
      payload: { id: +id }
    });

    axios
      .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
      .then(res =>
        dispatch({
          type: LOAD_POST_SUCCESS,
          payload: { data: res.data }
        })
      )
      .catch(error =>
        dispatch({
          type: LOAD_POST_ERROR,
          error
        })
      );
  };
}

export function addPost(title, body) {
  return dispatch => {
    dispatch({
      type: ADD_POST_START
    });

    axios
      .post('https://simple-blog-api.crew.red/posts', { title, body })
      .then(res => {
        dispatch({
          type: ADD_POST_SUCCESS,
          payload: { data: res.data }
        });

        dispatch(push('/posts'));
      })
      .catch(error =>
        dispatch({
          type: ADD_POST_ERROR,
          error
        })
      );
  };
}

export function editPost(id, title, body) {
  return dispatch => {
    dispatch({
      type: EDIT_POST_START
    });

    axios
      .put(`https://simple-blog-api.crew.red/posts/${id}`, { title, body })
      .then(res => {
        dispatch({
          type: EDIT_POST_SUCCESS,
          payload: { data: res.data }
        });

        dispatch(push('/posts'));
      })
      .catch(error =>
        dispatch({
          type: EDIT_POST_ERROR,
          error
        })
      );
  };
}

export function deletePost(id) {
  return dispatch => {
    dispatch({
      type: DELETE_POST_START
    });

    axios
      .delete(`https://simple-blog-api.crew.red/posts/${id}`)
      .then(() =>
        dispatch({
          type: DELETE_POST_SUCCESS,
          payload: { id }
        })
      )
      .catch(error =>
        dispatch({
          type: DELETE_POST_ERROR,
          error
        })
      );
  };
}

export function addComment(postId, body) {
  return dispatch => {
    dispatch({
      type: ADD_COMMENT_START
    });

    axios
      .post('https://simple-blog-api.crew.red/comments', { postId, body })
      .then(res => {
        dispatch({
          type: ADD_COMMENT_SUCCESS,
          payload: {
            id: +postId,
            data: res.data
          }
        });
      })
      .catch(error =>
        dispatch({
          type: ADD_COMMENT_ERROR,
          error
        })
      );
  };
}
