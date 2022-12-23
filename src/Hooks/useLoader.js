import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getUser, isAuthenticatedUser } from '../Redux/Slices/userSlice';
export const useLoader = (state , {loading , success},callback)=>{
const dispatch =useDispatch();
    useEffect(() => {
        toast.dismiss()
        if (state.isLoading) {
          toast.loading(loading);
        }
        if (state.isError) {
            if(state.error.data){

                toast.error(state.error.data.data.message);
            }else{
                toast.error(`${state.error.status} : ${state.error.error}` );

            }
        }
        if (state.isSuccess) {
          toast.success(success);
          dispatch(getUser() );
          dispatch(isAuthenticatedUser() );
          callback();
        }
      }, [state, dispatch ,loading ,success]);
      

}