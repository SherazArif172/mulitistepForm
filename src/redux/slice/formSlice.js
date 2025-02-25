import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  occupation: "",
  description: "",
  email: "",
  password: "",
};

export const formSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => {
      initialState;
    },
  },
});

export const { updateFormData, resetForm } = formSlice.actions;

export default formSlice.reducer;
