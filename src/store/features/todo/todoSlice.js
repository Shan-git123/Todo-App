import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  toggleForm: true,
  updateTodo: {},
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    clearAll: (state) => {
      state.todos = [];
    },
    deletedTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    toggleForm: (state, action) => {
      state.toggleForm = !state.toggleForm;
      state.updateTodo = { ...state.updateTodo, ...action.payload };
    },
    updatedTodo: (state, action) => {
      const todoToUpdate = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      todoToUpdate.title = action.payload.title;
      state.toggleForm = !state.toggleForm;
    },
  },
});

export const { todoAdded, clearAll, deletedTodo, toggleForm, updatedTodo } =
  todoSlice.actions;

export default todoSlice.reducer; //this reducer is gonna import in store
