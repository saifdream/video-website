const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    author: "",
    search: "",
    currentPage: 1,
    limit: 5,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        authorSelected: (state, action) => {
            state.author = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        resetFilter: (state) => {
            state.tags = [];
            state.search = "";
            state.author = "";
            state.currentPage = 1;
            state.limit = 5;
        },
    },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, authorSelected, setCurrentPage, resetFilter } = filterSlice.actions;
