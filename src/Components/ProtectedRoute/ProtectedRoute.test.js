
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import * as ReactRedux from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../../Pages/Loader/Loader';
import ProtectedRoute from './ProtectedRoute';

describe("PROTECTED ROUTE",()=>{
 it("When useAuthenticated is null",()=>{
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ isAuthenticated: null });
    const wrapper= shallow(<ProtectedRoute><div>authenticated</div></ProtectedRoute>);
    expect(wrapper.containsMatchingElement(<Loader />)).toEqual(true);
 }) 
 it("When useAuthenticated is false",()=>{
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ isAuthenticated: false });
    const wrapper= shallow(<ProtectedRoute><div>authenticated</div></ProtectedRoute>);
    expect(wrapper.containsMatchingElement(<Navigate to='/sign-in'/>)).toEqual(true);
 }) 
 it("When useAuthenticated is true",()=>{
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ isAuthenticated: true });
    const wrapper= shallow(<ProtectedRoute><div>authenticated</div></ProtectedRoute>);
    expect(wrapper.containsMatchingElement(<div>authenticated</div>)).toEqual(true);
 })
}) 
