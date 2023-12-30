import React, { createContext, useEffect, useState } from "react";
import { useGetAuthQuery } from "../../redux/api/employeeApiSlice";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authToken = localStorage.getItem("accessToken"); // Assuming you store the token in localStorage

  const { data, isLoading } = useGetAuthQuery(
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
        "Content-Type": "application/json",
      },
    }
  );

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (data) {
      setEmployee(data);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  }, [data, isLoading]);

  const authPayload = {
    employee,
    loading,
    isLoading,
    setLoading,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authPayload}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
