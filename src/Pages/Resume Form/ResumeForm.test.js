import { shallow } from "enzyme";
import React ,{ useState as useStateMock } from "react";
import BasicInfo from "../../Components/FormComponents/BasicInfo/BasicInfo";
import ResumeForm from "./ResumeForm";
import * as ReactRedux from "react-redux";
import ContactDetails from "../../Components/FormComponents/ContactDetails/ContactDetails";
import Education from "../../Components/FormComponents/Education/Education";
import Skills from "../../Components/FormComponents/Skills/Skills";
import WorkExperience from "../../Components/FormComponents/WorkExperience/WorkExperience";
import Achievements from "../../Components/FormComponents/Achievements/Achievements";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));


describe("RESUME FORM RENDERS", () => {
  const setState = jest.fn();
  let state = 0;

  beforeEach(() => {
    useStateMock.mockImplementation(() => [state, setState]);
  });
  it("Renders properly when step is equal to 0", () => {
        jest
    .spyOn(ReactRedux, "useSelector")
    .mockReturnValue(resumeData);
    state= 0 ;
    let wrapper = shallow(<ResumeForm />);
    expect(wrapper.containsMatchingElement(<BasicInfo/>)).toEqual(true);
  });  
  it("Renders properly when step is equal to 1", () => {
        jest
    .spyOn(ReactRedux, "useSelector")
    .mockReturnValue(resumeData);
    state= 1 ;
    let wrapper = shallow(<ResumeForm />);
    expect(wrapper.containsMatchingElement(<ContactDetails/>)).toEqual(true);
  });  
   it("Renders properly when step is equal to 2", () => {
        jest
    .spyOn(ReactRedux, "useSelector")
    .mockReturnValue(resumeData);
    state= 2 ;
    let wrapper = shallow(<ResumeForm />);
    expect(wrapper.containsMatchingElement(<Education/>)).toEqual(true);
  });   
   it("Renders properly when step is equal to 3", () => {
        jest
    .spyOn(ReactRedux, "useSelector")
    .mockReturnValue(resumeData);
    state= 3 ;
    let wrapper = shallow(<ResumeForm />);
    expect(wrapper.containsMatchingElement(<Skills/>)).toEqual(true);
  });   
   it("Renders properly when step is equal to 4", () => {
        jest
    .spyOn(ReactRedux, "useSelector")
    .mockReturnValue(resumeData);
    state= 4;
    let wrapper = shallow(<ResumeForm />);
    expect(wrapper.containsMatchingElement(<WorkExperience/>)).toEqual(true);
  });   
   it("Renders properly when step is equal to 5", () => {
        jest
    .spyOn(ReactRedux, "useSelector")
    .mockReturnValue(resumeData);
    state= 5;
    let wrapper = shallow(<ResumeForm />);
    expect(wrapper.containsMatchingElement(<Achievements/>)).toEqual(true);
  }); 
  
});




const resumeData = {
  basicInfo: {},
  contactDetails: {},
  education: [],
  skills: [],
  workExperience: [],
  achievements: [],
}