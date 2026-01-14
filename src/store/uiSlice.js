import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    theme: localStorage.getItem("theme") || "light",
    language: localStorage.getItem("language") || "en",
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.theme);
        },
        setLanguage(state, action) {
            state.language = action.payload;
            localStorage.setItem("language", state.language);
        },
    },
});

export const { toggleTheme, setLanguage } = uiSlice.actions;
export default uiSlice.reducer;