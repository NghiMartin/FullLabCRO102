import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: null,
  reducers: {
    setImage: (state, action) => {
      return action.payload; // action.payload là một đối tượng ảnh
    },
    clearImage: (state) => null,
  },
});

export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;
