import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getUser, isAuthenticatedUser } from '../Redux/Slices/userSlice';


export const useLoader = (state , {loading , success},callback)=>{
const dispatch =useDispatch();
    useEffect(() => {
      // dismiss all toasts
        toast.dismiss()
        // if request state is loading then toast will show loading
        if (state.isLoading) {
          toast.loading(loading);
        }
        // if request state is error then toast will show error and then show error message in it

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
          // function we want to call after request is suxessful
          callback();
        }
      }, [state, dispatch ,loading ,success,callback]);
      

}