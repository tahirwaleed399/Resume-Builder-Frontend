// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => {
  return {
    __esModule: true,    //    <----- this __esModule: true is important
    ...jest.requireActual('react-redux'),
    useDispatch:jest.fn(),
  };
});

jest.mock("react-router-dom", () => ({
  __esModule: true,
  ...(jest.requireActual("react-router-dom")), // technically it passes without this too, but I'm not sure if its there for other tests to use the real thing so I left it in
  useNavigate: () => jest.fn()
}));
