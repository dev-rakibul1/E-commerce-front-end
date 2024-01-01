import { useEffect, useState } from "react";

import { Button, Divider } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useLoginEmployeeMutation } from "../../redux/api/employeeApiSlice";
import AlertMessage from "../../shared/alert/Alert";
import SmallSpinner from "../../shared/spinner/SmallSpiner";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [responseServerError, setResponseServerError] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [loginEmployee, { isLoading, error, isError, isSuccess, data }] =
    useLoginEmployeeMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      setResponseServerError(error?.data?.message);
    } else {
      setResponseServerError("");
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess && data) {
      const token = data?.data?.accessToken;
      localStorage.setItem("accessToken", token);
      navigate("/");
      window.location.reload();
    }
  }, [isSuccess, data, navigate]);

  // Login handle form
  const handleInputFields = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = " Email is not valid!";
      isValid = false;
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required!";
      isValid = false;
    } else if (
      formData.password &&
      (formData.password.length > 64 || formData.password.length < 8)
    ) {
      newErrors.password = "Password must be between 6 to 64 charter.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // console.log(errors);
  const handleLoginUserForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      loginEmployee(formData);
    } else {
      console.error("Form has errors. Please fix them.");
    }
  };

  return (
    <>
      <div className="login" style={{ maxWidth: "450px" }}>
        {isSuccess && (
          <AlertMessage
            message="Login success!"
            type="success"
            showIcon="showIcon"
            background="green"
          />
        )}

        <div className="login-wrapper">
          <h4
            style={{
              textAlign: "center",
              fontSize: { xs: "21px", sm: "30px", md: "35px" },
            }}
          >
            Register <span style={{ color: "#1677ff" }}>Employee shift</span>
          </h4>

          <Divider style={{ margin: "15px 0" }} plain>
            Login now
          </Divider>

          {responseServerError && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  background: "#ffd3d3",
                  padding: "10px",
                  textAlign: "center",
                  maxWidth: "100%",
                  width: "320px",
                  color: "red",
                  display: "flex",
                  borderRadius: "4px",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "0.875rem",
                }}
              >
                {responseServerError}
              </span>
            </div>
          )}

          <form
            className="register-form-wrapper"
            onSubmit={handleLoginUserForm}
          >
            {/* Email */}
            <div className="register-input-control">
              <input
                type="emial"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputFields}
                name="email"
                id="email"
                className={`${errors.email ? "warngin-border" : ""}`}
              />
              <label htmlFor="email" className="register-icons-wrap">
                <AiOutlineUser className="register-icons" />
              </label>
            </div>
            <small className="warning-text">{errors.email}</small>

            {/* Password */}
            <div className="register-input-control">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputFields}
                name="password"
                id="password"
                className={` ${errors.password ? "warngin-border" : ""}`}
              />
              <label
                htmlFor="password"
                className="register-icons-wrap"
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <VscEye className="register-icons" />
                ) : (
                  <VscEyeClosed className="register-icons" />
                )}
              </label>
            </div>
            <small className="warning-text">{errors.password}</small>

            <div className="register-button text-right">
              {isLoading ? (
                <SmallSpinner width="block" style={{ width: "100%" }} />
              ) : (
                <Button
                  htmlType="submit"
                  type="primary"
                  className="login-register"
                  style={{
                    width: "100%",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                  }}
                >
                  Log in
                </Button>
              )}
            </div>
          </form>

          <div
            style={{
              my: 1,
              fontSize: "15px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            <span>
              <Link style={{ color: "#4a95ff" }} to="/">
                Forgot password
              </Link>
            </span>

            <Divider style={{ margin: "15px 0" }} plain>
              OR
            </Divider>
            <p
              className="account-have-none text-center"
              style={{ marginTop: "15px" }}
            >
              Create an account with My Chat?{" "}
              <Link to="/auth/register" style={{ color: "#4a95ff" }}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
