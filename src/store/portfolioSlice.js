import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postPortfolioData } from "../services/portfolioService";

export const sendPortfolioData = createAsyncThunk(
  "portfolio/sendPortfolioData",
  async (language, { rejectWithValue }) => {
    try {
      return await postPortfolioData(language);
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.status,
      });
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendPortfolioData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendPortfolioData.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(sendPortfolioData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload?.message;
      });
  },
});

export default portfolioSlice.reducer;