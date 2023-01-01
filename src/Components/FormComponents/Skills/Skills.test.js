import { render } from "@testing-library/react";
import Skills from "./Skills";



jest.mock('@chakra-ui/react',()=>{
    return {
        __esModule: true,    //    <----- this __esModule: true is important
    ...jest.requireActual('@chakra-ui/react'),
    Slider : jest.fn(()=><input type='number' />)
    }
})
describe("SKILLS",()=>{

    it("rendering and submitting form",()=>{

        let initStep = 0;
        let view = render(
          <Skills step={initStep} setStep={jest.fn()}></Skills>
        );


    })


})