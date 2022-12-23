import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const userState = useSelector((state)=>state.userState);
    if(userState.isAuthenticated === null ) return 'Loading...';

    return userState.isAuthenticated ? children : <Navigate to="/sign-in" />;
  }

  export default ProtectedRoute;