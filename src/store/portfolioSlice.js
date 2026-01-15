import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postPortfolioData } from "../services/portfolioService";

export const sendPortfolioData = createAsyncThunk(
  "portfolio/sendPortfolioData",
  async (language, { rejectWithValue }) => {
    try {
      return await postPortfolioData(language);
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Bir hata oluştu."
      );
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
        state.error = action.payload;
      });
  },
});

export default portfolioSlice.reducer;