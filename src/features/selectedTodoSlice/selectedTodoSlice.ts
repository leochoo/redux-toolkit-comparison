import {
  combineReducers,
  configureStore,
  createSlice,
  getDefaultMiddleware,
  PayloadAction,
} from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";
import logger from "redux-logger";

const selectedTodoslice = createSlice({
  name: "selectedTodo",
  initialState: null as string | null, // primitive value here
  reducers: {
    select: (state, { payload }: PayloadAction<{ id: string | null }>) =>
      payload.id,
    // below will not work with primitive value as state
    // select: (state, { payload }: PayloadAction<{ id: string }>) => {
    //   //   state = payload.id;
    // },
  },
});

export const { select: selectTodoActionCreator } = selectedTodoslice.actions;
export const selectedTodoReducer = selectedTodoslice.reducer;
