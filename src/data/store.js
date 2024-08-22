import { configureStore } from "@reduxjs/toolkit"
import starredSlice from './starredSlice'
import watchLaterSlice from './watchLaterSlice'
import moviesReducer from './moviesSlice'; // Certifique-se de que o caminho está correto


const store = configureStore({
    reducer: {
        movies: moviesReducer,
        starred: starredSlice.reducer,
        watchLater: watchLaterSlice.reducer
    },
})

export default store
