import { createSlice, configureStore } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: false,
  },
  reducers: {
    alterTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { alterTheme } = themeSlice.actions;

const store = configureStore({
  reducer: themeSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));
