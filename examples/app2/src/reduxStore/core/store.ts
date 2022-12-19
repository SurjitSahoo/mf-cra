import { configureStore } from '@reduxjs/toolkit';

// client state slices
import countReducer from '../client/count';

export const store = configureStore({
  reducer: {
    // client states
    count: countReducer,
    // server states (api calls)
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type ActionDispatch = typeof store.dispatch;
