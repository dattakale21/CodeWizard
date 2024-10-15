// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import codeEditorReducer from './features/codeEditorSlice'; // Make sure this path is correct

const store = configureStore({
  reducer: {
    codeEditor: codeEditorReducer,
  },
});

export default store;
