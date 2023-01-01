import {  render, screen } from "@testing-library/react";
import AllResumes from "./AllResumes";
import {
  useDeleteResumeMutation,
  useGetResumesQuery,
} from "../../Redux/ResumeApi/ResumeApi";

jest.mock("../../Redux/ResumeApi/ResumeApi");

describe("ALL RESUMES", () => {
  it("If is loading is true showing loader", () => {
    useGetResumesQuery.mockReturnValue({
      data: null,
      isLoading: true,
      isSuccess: false,
      isError: false,
    });
    useDeleteResumeMutation.mockReturnValue([
      jest.fn(),
      { isLoading: false, isError: false, isSuccess: false },
    ]);
    render(<AllResumes />);

    const loadingText = screen.getByTestId("loading");
    expect(loadingText).toBeInTheDocument();
  });
  it("If is success is true and data is available", () => {
    useGetResumesQuery.mockReturnValue({
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: testData,
    });
    useDeleteResumeMutation.mockReturnValue([
      jest.fn(),
      { isLoading: false, isError: false, isSuccess: false },
    ]);
    render(<AllResumes />);
    const data = screen.getAllByTestId("resume");
    data.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
  });
  it("If there is an error while getting resumes", ()=>{
    useGetResumesQuery.mockReturnValue({
        data: null,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error:"SOMETHING WENT WRONG"
      });
      useDeleteResumeMutation.mockReturnValue([
        jest.fn(),
        { isLoading: false, isError: false, isSuccess: false },
      ]);
       render(<AllResumes />);
  
      const element = screen.getByText("SOMETHING WENT WRONG");
      expect(element).toBeInTheDocument();
  });
 
});

//is Loading is not false
// loading will be showing

// if is success is true show data

// if is error is true show error

const testData = {
  data: [
    {
      _id :"fsdas",
      basicInfo: {
        title: "MERN STACK DEVELOPER",
        name: "WALEED TAHIR",
      },
    },
    {
      _id :"fsdfasdas",

      basicInfo: {
        title: "BEAUTY GIRL",
        name: "HIBA ZAHID",
      },
    },
  ],
};
