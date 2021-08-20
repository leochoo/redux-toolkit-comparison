import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counterSlice";
import { selectedTodoReducer } from "../features/selectedTodoSlice/selectedTodoSlice";
import { todosReducer } from "../features/todos/todosSlice";
import logger from "redux-logger";

// Combining reducers
const reducer = {
  todos: todosReducer,
  selectedTodo: selectedTodoReducer,
  counter: counterReducer,
};

// TODO: instead of spread operator, use prepend? or append or sth.
// getDefaultMiddleware is necessary to tell Redux that we want to use the default middlewares.
const middleware = [...getDefaultMiddleware(), logger];
// comparison: devtool already connected so no need to declare.

export const store = configureStore({
  reducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
