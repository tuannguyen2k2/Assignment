import { createSlice } from "@reduxjs/toolkit";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    price: sessionStorage.getItem("price"),
  },
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const {
  setPrice,

} = appSlice.actions;
export default appSlice.reducer;
