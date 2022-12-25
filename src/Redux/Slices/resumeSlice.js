import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: undefined ,
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
      setFullResume(state , {payload}){
        let basicInfo = {...payload.basicInfo};
        basicInfo.profile =  payload.basicInfo.profile ? payload.basicInfo.profile.url : '/Images/male.png';
        state.id=payload.id;
        state.basicInfo = basicInfo;
        state.contactDetails= payload.contactDetails;
        state.skills= payload.skills;
        state.education= payload.education ? payload.education : [];
        state.achievements= payload.achievements ? payload.achievements : [];
        state.workExperience= payload.workExperience ? payload.workExperience : [];
      },
      setResumeInitialState(state){
        state.id = initialState.id;
        state.basicInfo = initialState.basicInfo;
        state.contactDetails = initialState.contactDetails;
        state.workExperience = initialState.workExperience;
        state.achievements = initialState.achievements;
        state.education = initialState.education;
        state.skills = initialState.skills;
      }
  },
})

// Action creators are generated for each case reducer function
export const {setResumeInitialState,setFullResume,setWorkExperienceArray,setBasicInfo ,setContactDetails,setSkillsArray,setAchievementsArray,setEducatonArray } = resumeSlice.actions

export default resumeSlice.reducer