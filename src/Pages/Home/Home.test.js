import {  render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import * as ReactRedux from 'react-redux';

const AllTheProviders = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

describe("HOME", () => {
  it("User Should Be Available and its name should be rendered", async () => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ user: { name: "Waleed" } });
    jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(jest.fn());
   
   

    render(
      <AllTheProviders>
        <Home></Home>
      </AllTheProviders>
    );

    let text = screen.getByTestId("user").textContent;
    expect(text).toBe("Waleed");
  });
});
