import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../../Pages/Loader/Loader";
// Protected Route Means If user is not logged in so he will not be able to access them

function ProtectedRoute({ children }) {
    const userState = useSelector((state)=>state.userState);
    if(userState.isAuthenticated === null ) return <Loader></Loader>;

    return userState.isAuthenticated ? children : <Navigate to="/sign-in" />;
  }

  export default ProtectedRoute;