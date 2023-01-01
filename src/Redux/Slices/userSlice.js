import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BackendUrl  from "../../Utils/BackendUrl";
import axios from "axios";
import { toast } from "react-toastify";


const options = {
  headers: {"content-type": "application/json"},
  withCredentials : true ,
  credentials : 'include'
}

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
  isAuthenticated: null,
  user: null,
} ;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = action.payload;
    },
    setLogoutAuth (state ){
      state.isAuthenticated  = false 
      state.user = null;
    }
  },
  extraReducers: (builder) => {
   builder
   .addCase(getUser.pending, (state) => {
    setState(state, true, false, false, null, null);
  })
  .addCase(getUser.fulfilled, (state, { payload }) => {
    setState(state, false, true, false, null, payload);
  })
  .addCase(getUser.rejected, (state, { payload }) => {
    setState(state, false, false, true, payload, null);
  })
   .addCase(isAuthenticatedUser.fulfilled, (state, { payload }) => {

    state.isAuthenticated = true;
  })
  .addCase(isAuthenticatedUser.rejected, (state, { payload }) => {


    state.isAuthenticated = false;
  })

     
  },
});

export const getUser = createAsyncThunk(
  "user/GET_USER",
  async (type, thunkAPI) => {
    try {
      let res = await axios.get(BackendUrl + "/get-user" , options);

      return res.data.data.user;
    } catch (err) {

      toast.error(err["response"].data.message);
      return thunkAPI.rejectWithValue(err["response"].data.message);
    }
  }
);


export const isAuthenticatedUser = createAsyncThunk(
  "user/isAuthenticated",
  async (type, thunkAPI) => {
    try {
      let res = await axios.get(BackendUrl + "/is-authenticated",options);

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err["response"].data.data.message);
    }
  }
);
export const { setAuth,setLogoutAuth } = userSlice.actions;
export default userSlice.reducer;

function setState(
  state ,
  isLoading,
  isSuccess,
  isError,
  error,
  user
) {
  state.isLoading = isLoading;
  state.isSuccess = isSuccess;
  state.isError = isError;
  state.error = error;

  state.user = user;
}
