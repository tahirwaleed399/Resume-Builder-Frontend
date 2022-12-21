import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basicInfo : {
    name : "",
    title : "",
    summary : "",
    profile : "",
    gender:"male",
  },
  contactDetails : {
    phone : "",
    email : "",
    website :"",
    linkedin : "",
  }
}

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setBasicInfo: (state , action) => {
        state.basicInfo = {...state.basicInfo , ...action.payload}
      }, setContactDetails: (state , action) => {
        state.contactDetails = {...state.contactDetails , ...action.payload}
      },
  },
})

// Action creators are generated for each case reducer function
export const {setBasicInfo ,setContactDetails } = resumeSlice.actions

export default resumeSlice.reducer