import { createSelector } from 'reselect';

export const postsMapSelector = state => state.posts.entities;
export const postListSelector = createSelector(
  postsMapSelector,
  postsMap => postsMap.valueSeq().toArray()
);
export const loadingPostsSelector = state => state.posts.loading;
export const loadedPostsSelector = state => state.posts.loaded;

const idSelector = (_, id) => id;
export const postMapSelector = createSelector(
  postsMapSelector,
  idSelector,
  (posts, id) => posts.get(+id)
);

export const commentsSelector = createSelector(
  postsMapSelector,
  idSelector,
  (posts, id) => posts.get(+id).comments
);
export const loadingCommentsSelector = createSelector(
  postsMapSelector,
  idSelector,
  (posts, id) => posts.get(+id).commentsLoading
);
export const loadedCommentsSelector = createSelector(
  postsMapSelector,
  idSelector,
  (posts, id) => posts.get(+id).commentsLoaded
);
