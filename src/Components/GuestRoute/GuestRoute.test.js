
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import * as ReactRedux from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../../Pages/Loader/Loader';
import GuestRoute from './GuestRoute';

describe("PROTECTED ROUTE",()=>{
 it("When useAuthenticated is null",()=>{
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ isAuthenticated: null });
    const wrapper= shallow(<GuestRoute><div>Not authenticated</div></GuestRoute>);
    expect(wrapper.containsMatchingElement(<Loader />)).toEqual(true);
 }) 
 it("When useAuthenticated is false",()=>{
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ isAuthenticated: false });
    const wrapper= shallow(<GuestRoute><div>Not authenticated</div></GuestRoute>);
    expect(wrapper.containsMatchingElement(<div>Not authenticated</div>)).toEqual(true);
 }) 
 it("When useAuthenticated is true",()=>{
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ isAuthenticated: true });
    const wrapper= shallow(<GuestRoute><div>Not authenticated</div></GuestRoute>);
    expect(wrapper.containsMatchingElement(<Navigate to="/" />)).toEqual(true);
 })
}) 
