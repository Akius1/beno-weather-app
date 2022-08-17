import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { weatherService } from "../service";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (query) => {
    const response = await weatherService.getWeather(query);
    return response.data;
  }
);

const initialState = {
  name: null,
  error: null,
  status: "idle",
};

const weatherSlice = createSlice({
  name: [],
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.status = "complete";
      state.name = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
        if (action.payload) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error
        }
      })
  },
});

export const selectWeather = (state) => state.weather.name;
export const selectWeatherFetchStatus = (state) => state.weather.status;

export default weatherSlice.reducer;
