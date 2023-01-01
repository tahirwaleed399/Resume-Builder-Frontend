import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wait } from "@testing-library/user-event/dist/utils";
import { shallow } from "enzyme";
import React, { useState as useStateMock } from "react";
import * as ReactRedux from "react-redux";
import Education from "./Education";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("EDUCATION FORM", () => {
  const setState = jest.fn();
  jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(jest.fn());
  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setState]);
  });
  it("rendering and checking submitting education form", async () => {
    let initStep = 0;
    let view = render(
      <Education step={initStep} setStep={jest.fn()}></Education>
    );

    const institute = screen.getByTestId("institute");
    const title = screen.getByTestId("title");
    const startDate = screen.getByTestId("startDate");
    const endDate = screen.getByTestId("endDate");
    const addBtn = screen.getByTestId("submitEducationForm");

    await wait(() => {
      for (let i = 0; i <= formData.length; i++) {
        userEvent.type(title, formData[i].title);
        userEvent.type(institute, formData[i].institute);
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
      <Education
        formValues={formData}
        step={initStep}
        setStep={jest.fn()}
      ></Education>
    );
    formData.forEach((data) => {
      expect(screen.getByText(data.title)).toBeInTheDocument();
    });
  });
});

let formData = [
  {
    title: "MBA",
    institute: "HARVARD",
    startDate: "2008-05-12",
    endDate: "20012-05-12",
  },
  {
    title: "BS CS",
    institute: "FAST",
    startDate: "2009-05-12",
    endDate: "2034-05-12",
  },
];
