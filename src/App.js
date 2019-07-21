import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from './components/routes/posts';
import PostSingle from './components/routes/post-single';
import PostAdd from './components/post-add';
import PostEdit from './components/post-edit';

const StApp = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 15px;
`;

const App = () => (
  <StApp>
    <Switch>
      <Route path="/posts/add" component={PostAdd} />
      <Route path="/posts/edit/:postId" component={PostEdit} />
      <Route path="/posts/:postId" component={PostSingle} />
      <Route path="/posts" component={Posts} />
      <Route path="/error" render={() => <div>Error</div>} />
      <Redirect from="/" to="/posts" />
      <Redirect from="*" to="/error" />
    </Switch>
  </StApp>
);

export default App;
