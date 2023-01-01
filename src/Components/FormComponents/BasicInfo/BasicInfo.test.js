import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BasicInfo from "./BasicInfo";
import * as ReactRedux from "react-redux";


jest.setTimeout(60000)


describe("BASIC FORM", () => {
   
  it("rendering and submitting a basic Formik form", async () => {
    jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(jest.fn());

    let initStep = 0;
    render(<BasicInfo step={initStep} setStep={(val) => (initStep = val)} />);

    const name = screen.getByTestId("name");
    const title = screen.getByTestId("title");
    const summary = screen.getByTestId("summary");
    const submit = screen.getByTestId("submitBasicForm");
    userEvent.type(name, formData.name);
    userEvent.type(title, formData.title);
    userEvent.type(summary, formData.summary);

    fireEvent.click(submit);

    await waitFor(() => expect(initStep).toEqual(1));
  });
});

const formData = {
  name: "Hiba",
  title: "graphic designer",
  summary: "My name is Hiba I am the best graphic designer in the world",
};
