import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./contants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [], // Initialize messages as an empty array
  },

  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length >= OFFSET_LIVE_CHAT) {
        state.messages.shift(); // Remove the oldest message (first item)
      }
      state.messages.push(action.payload); // Add the new message
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
