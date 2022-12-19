import { createSlice } from '@reduxjs/toolkit';
import { useActionDispatcher, useStateSelector } from '../core';

const countSlice = createSlice({
  name: 'count',
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    clear(state) {
      state.count = 0;
    },
  },
});

export default countSlice.reducer;
const { increment, decrement, clear } = countSlice.actions;

export function useCount() {
  const count = useStateSelector(state => state.count.count);
  const dispatch = useActionDispatcher();

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    clear: () => dispatch(clear()),
  };
}
