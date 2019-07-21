import { Record, OrderedMap } from 'immutable';
import {
  LOAD_ALL_POSTS_ERROR,
  LOAD_ALL_POSTS_START,
  LOAD_ALL_POSTS_SUCCESS,
  LOAD_POST_ERROR,
  LOAD_POST_START,
  LOAD_POST_SUCCESS,
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
import { arrToMap } from './utils';

const Post = Record({
  id: null,
  title: null,
  body: null,
  commentsLoading: false,
  commentsLoaded: false,
  comments: []
});

const PostList = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  error: null
});

export default function(state = new PostList(), action) {
  const { type, payload, error } = action;

  switch (type) {
    case LOAD_ALL_POSTS_START:
      return state.set('loading', true);

    case LOAD_ALL_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('loaded', true)
        .update('entities', entities =>
          arrToMap(payload.data, Post).merge(entities)
        );

    case LOAD_ALL_POSTS_ERROR:
      return state.set('loading', false).set('error', error);

    case LOAD_POST_START:
      return state.setIn(['entities', payload.id, 'commentsLoading'], true);

    case LOAD_POST_SUCCESS:
      return state
        .setIn(['entities', payload.data.id], new Post(payload.data))
        .setIn(['entities', payload.data.id, 'commentsLoading'], false)
        .setIn(['entities', payload.data.id, 'commentsLoaded'], true);

    case LOAD_POST_ERROR:
      return state
        .setIn(['entities', payload.data.id, 'commentsLoading'], false)
        .set('error', error);

    case ADD_POST_START:
      return state;

    case ADD_POST_SUCCESS:
      return state.setIn(
        ['entities', payload.data.id],
        new Post({ ...payload.data })
      );

    case ADD_POST_ERROR:
      return state.set('error', error);

    case EDIT_POST_START:
      return state;

    case EDIT_POST_SUCCESS:
      return state.setIn(
        ['entities', payload.data.id],
        new Post({ ...payload.data })
      );

    case EDIT_POST_ERROR:
      return state.set('error', error);

    case DELETE_POST_START:
      return state;

    case DELETE_POST_SUCCESS:
      return state.deleteIn(['entities', payload.id]);

    case DELETE_POST_ERROR:
      return state.set('error', error);

    case ADD_COMMENT_START:
      return state;

    case ADD_COMMENT_SUCCESS:
      return state.updateIn(['entities', payload.id, 'comments'], comments =>
        comments.concat(payload.data)
      );

    case ADD_COMMENT_ERROR:
      return state.set('error', error);

    default:
      return state;
  }
}
