import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequireAuth = ({ allowedRoles }) => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
    // Redirect to home if user tries to access admin content, or login
    if (currentUser.role === "user") {
        return <Navigate to="/" replace />;
    }
    // If admin tries to access user only content (if any), redirect to dashboard
     if (currentUser.role === "admin") {
        return <Navigate to="/dashboard" replace />;
    }
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
