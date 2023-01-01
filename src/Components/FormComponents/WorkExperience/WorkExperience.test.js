import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState as useStateMock } from "react";
import * as ReactRedux from "react-redux";
import WorkExperience from "./WorkExperience";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("WORK EXPERIENCE FORM", () => {
  const setState = jest.fn();
  jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(jest.fn());
  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });
  it("rendering and checking submitting work experience form", async () => {
    let initStep = 0;
    let view = render(
      <WorkExperience step={initStep} setStep={jest.fn()}></WorkExperience>
    );

    const companyName = screen.getByTestId("companyName");
    const role = screen.getByTestId("role");
    const location = screen.getByTestId("location");
    const description = screen.getByTestId("description");
    const endDate = screen.getByTestId("endDate");
    const startDate = screen.getByTestId("startDate");
    const addBtn = screen.getByTestId("submitWorkExperienceForm");

    await wait(() => {
      for (let i = 0; i <= formData.length; i++) {
        userEvent.type(companyName, formData[i].companyName);
        userEvent.type(role, formData[i].role);
        userEvent.type(location, formData[i].location);
        userEvent.type(description, formData[i].description);
        fireEvent.change(startDate, {
          target: { value: formData[i].startDate },
        });
        fireEvent.change(endDate, { target: { value: formData[i].endDate } });
        fireEvent.click(addBtn);
      }
    });

    await waitFor(() =>
      expect(setState).toHaveBeenCalledTimes(formData.length)
    );
  });

  it("checking the education list is rendering after submitting form", () => {
    let initStep = 0;
    let view = render(
      <WorkExperience
        formValues={formData}
        step={initStep}
        setStep={jest.fn()}
      ></WorkExperience>
    );
    formData.forEach((data) => {
      expect(screen.getByText(data.companyName)).toBeInTheDocument();
    });
  });
});

let formData = [
  {
    companyName: "PRELEADSOFT",
    role: "MERN DEVELOPER",
    location: "LAHORE",
    description: "LOVED THIS JOB A LOT",
    startDate: "2009-05-12",
    endDate: "2034-05-12",
  }, {
    companyName: "BILyTICA",
    role: "REACT DEVELOPER",
    location: "ISL",
    description: "THIS JOB IS GREAT",
    startDate: "2009-05-12",
    endDate: "2034-05-12",
  },
];
