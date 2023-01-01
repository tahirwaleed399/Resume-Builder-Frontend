import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../../Pages/Loader/Loader";
// Guest Route Means If user is already logged in so he will not be able to access them
function GuestRoute({ children }) { 
    const userState = useSelector((state)=>state.userState);
    if(userState.isAuthenticated === null ) return <Loader></Loader>;

    return userState.isAuthenticated ?  <Navigate to="/" /> : children;
  }

  export default GuestRoute;