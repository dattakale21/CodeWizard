// src/features/codeEditorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  code: '// Write your code here',
};

const codeEditorSlice = createSlice({
  name: 'codeEditor',
  initialState,
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload;
    },
    clearCode: (state) => {
      state.code = '// Write your code here';
    },
  },
});

export const { setCode, clearCode } = codeEditorSlice.actions;
export default codeEditorSlice.reducer;
