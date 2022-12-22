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
  },
  skills : [],
  achievements : [],
  education : [],
  workExperience:[]
}

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setBasicInfo: (state , action) => {
        state.basicInfo = {...state.basicInfo , ...action.payload}
      }, setContactDetails: (state , action) => {
        state.contactDetails = {...state.contactDetails , ...action.payload}
      },setSkillsArray: (state , action) => {
        state.skills = action.payload
      },setAchievementsArray: (state , action) => {
        state.achievements = action.payload
      },setEducatonArray: (state , action) => {
        state.education = action.payload
      },setWorkExperienceArray: (state , action) => {
        state.workExperience = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const {setWorkExperienceArray,setBasicInfo ,setContactDetails,setSkillsArray,setAchievementsArray,setEducatonArray } = resumeSlice.actions

export default resumeSlice.reducer