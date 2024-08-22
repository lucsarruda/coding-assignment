import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (url) => {
  const response = await fetch(url);
  return response.json();
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: { results: [] },
    status: 'idle',
    error: null,
  },
  reducers: {
    appendMovies: (state, action) => {
      state.movies.results = [...state.movies.results, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { appendMovies } = moviesSlice.actions;

export default moviesSlice.reducer;