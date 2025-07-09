import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  postList: [],
  postDetails: null,
};

export const addNewPost = createAsyncThunk(
  "/posts/addnewpost",
  async (formData) => {
    const result = await axios.post(
      "http://localhost:5000/api/posts/add",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data;
  }
);

export const fetchAllPosts = createAsyncThunk(
  "/posts/fetchallposts",
  async () => {
    const result = await axios.get("http://localhost:5000/api/posts/get");

    return result?.data;
  }
);

export const editPost = createAsyncThunk(
  "/posts/editpost",
  async ({ id, formData }) => {
    const result = await axios.put(
      `http://localhost:5000/api/posts/edit/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const deletePost = createAsyncThunk("/posts/deletePost", async (id) => {
  const result = await axios.delete(
    `http://localhost:5000/api/posts/delete/${id}`
  );

  return result?.data;
});

export const fetchPostDetails = createAsyncThunk(
  "/posts/fetchPostDetails",
  async (id) => {
    const result = await axios.get(`http://localhost:5000/api/posts/get/${id}`);

    return result?.data;
  }
);

const postSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postList = action.payload.data;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.postList = [];
      })
      .addCase(fetchPostDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPostDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postDetails = action.payload.data;
      })
      .addCase(fetchPostDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.postList = null;
      });
  },
});

export default postSlice.reducer;
