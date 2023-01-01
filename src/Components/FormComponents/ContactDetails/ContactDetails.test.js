import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as ReactRedux from 'react-redux';
import ContactDetails from "./ContactDetails";
jest.setTimeout(60000)

describe("CONTACT FORM", () => {
  it("rendering and submitting a contact Formik form", async () => {
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(jest.fn());

    let initStep = 0 ;
     render(<ContactDetails step={initStep} setStep={(val)=>initStep =val} />);
    
    const linkedin = screen.getByTestId("linkedin");
    const phone = screen.getByTestId("phone");
    const email = screen.getByTestId("email");
    const website = screen.getByTestId("website");
    const submit = screen.getByTestId("submitContactForm");
    userEvent.type(linkedin, formData.linkedin);
    userEvent.type(phone, formData.phone);
    userEvent.type(website, formData.website);
    userEvent.type(email, formData.email);

    

    fireEvent.click(submit);

await waitFor(()=> expect(initStep).toEqual(1))
});
});

const formData = {
  phone: "03336998773",
  email: "tahirwaleed399@gmail.com",
  linkedin: "tahirwaleed399",
  website: "waleedtahir.com",
};
