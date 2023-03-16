import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteTodo, createTodo, editTodo, getTodo } from "../api/request";
import type { TodoType } from "../utils/Types";

export const deleteTodoItems = createAsyncThunk(
  "DELETE-TODO",
  async (todoId: string) => {
    await deleteTodo(todoId);
  }
);

export const getTodoItems = createAsyncThunk<TodoType[]>(
  "GET-TODO",
  async () => {
    const response = await getTodo();
    return response.data;
  }
);

export const createTodoItem = createAsyncThunk(
  "CREATE-TODO",
  async (title: string) => {
    await createTodo(title);
  }
);

export const editTodoItem = createAsyncThunk(
  "EDIT-TODO",
  async ({
    todoId,
    title,
    done,
  }: {
    todoId: string;
    title: string;
    done: boolean;
  }) => {
    const response = await editTodo(todoId, title, done);
    return response.data;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: <TodoType[]>[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodoItems.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(deleteTodoItems.fulfilled, (state, action) => {
      return state.filter((item: TodoType) => item.id !== action.meta.arg);
    });
    builder.addCase(createTodoItem.fulfilled, (state, action) => {
      if (action.meta.arg) {
        getTodoItems();
      }
    });
  },
});

export default todoSlice;
