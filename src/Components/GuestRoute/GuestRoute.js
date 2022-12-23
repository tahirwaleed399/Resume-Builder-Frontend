import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function GuestRoute({ children }) {
    const userState = useSelector((state)=>state.userState);
    if(userState.isAuthenticated === null ) return 'Loading...';

    return userState.isAuthenticated ?  <Navigate to="/" /> : children;
  }

  export default GuestRoute;