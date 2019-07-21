import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import posts from './posts';

export default combineReducers({
  router: connectRouter(history),
  posts
});
