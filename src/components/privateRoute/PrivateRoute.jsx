import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../shared/spinner/Spinner";
import { AuthContext } from "../authProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { employee, loading, setLoading, isLoading } = useContext(AuthContext);
  const location = useLocation();

  const isAuthenticated = !!employee?.data?.email;


  if (loading) {
    return (
      <div className="flex-center w-full max-w-full min-height">
        <Spinner />
      </div>
    );
  }
  // if (isLoading) {
  //   return (
  //     <div className="flex-center min-height">
  //       <Spinner />
  //     </div>
  //   );
  // }

  // return !auth?.email ? (
  //   <Navigate to="/auth/login" state={{ from: location }} replace />
  // ) : (
  //   <>{children}</>
  // );

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
