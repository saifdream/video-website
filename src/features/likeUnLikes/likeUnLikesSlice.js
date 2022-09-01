import { updateLikeUnLike } from "./likeUnLikesAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    // video: {},
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const patchVideo = createAsyncThunk("video/patchVideo", async (data) => {
    const video = await updateLikeUnLike(data);
    return video;
});

const patchVideoSlice = createSlice({
    name: "patchVideo",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(patchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(patchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.video = action.payload;
            })
            .addCase(patchVideo.rejected, (state, action) => {
                state.isLoading = false;
                // state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default patchVideoSlice.reducer;
