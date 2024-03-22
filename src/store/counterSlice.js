import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0
  };

const  counterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        incrementCounter: (state)  => {
            state.counter += 1;
        },
        decrementCounter: (state)  => {
            state.counter -= 1;
        },
        multiply: (state, action) => {
            state.counter *= action.payload; // Nhân giá trị của counter với payload
          },
        // extraReducers: (builder) => {
        // // Sử dụng addMatcher để xử lý action RESET_COUNTER
        // builder.addMatcher(
        //     (action) => action.type === 'RESET_COUNTER', // Kiểm tra nếu action là RESET_COUNTER
        //     (state) => {
        //     state.counter = 0; // Reset giá trị của counter về 0
        //     }
        // );
        // },
        resetCounter: (state) => {
            state.counter = 0; // Reset giá trị của counter về 0
          }
    }
})
export const { multiply, incrementCounter, decrementCounter,resetCounter } = counterSlice.actions;
export default counterSlice.reducer;