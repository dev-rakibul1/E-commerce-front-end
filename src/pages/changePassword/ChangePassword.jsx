import { Button, Col, Input, Row } from "antd";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { FaKey } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import AlertMessage from "../../shared/alert/Alert";
import SmallSpinner from "../../shared/spinner/SmallSpiner";

const ChangePassword = () => {
  const { employee } = useContext(AuthContext);
  const id = employee?.data?._id;
  const [errors, setErrors] = useState({});
  const [passErrors, setPassErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate first name
    if (!formData.password.trim()) {
      newErrors.password = "password is required";
      isValid = false;
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "New password is required";
      isValid = false;
    }

    if (formData.newPassword.length < 6) {
      newErrors.newPassword = "New password must be at least 6 characters long";
      isValid = false;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password does not match!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatePassword = {
      password: formData.password,
      newPassword: formData.newPassword,
    };

    if (validateForm()) {
      const url = `https://mes-pi.vercel.app/api/v1/employee/password-change/${id}`;

      try {
        setLoading(true);
        const response = await axios.patch(url, updatePassword, {
          headers: {
            authorization: `${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        });

        // console.log(response);
        if (response) {
          setPassErrors(response?.data?.message);
          formRef.current.reset();
        }
      } catch (error) {
        if (error) {
          setPassErrors("New password does not match!");
        } else {
          setPassErrors("");
        }
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
    e.target.reset();
  };

  return (
    <>
      <h1 className="title">Change password</h1>
      <div className="flex-center w-full max-w-full">
        <form
          className="w-full max-w-full"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          {passErrors && <AlertMessage message={passErrors} />}
          <Row gutter={[16, 16]} className="flex-center w-full max-w-full">
            <Col sm={12} md={12} lg={8} className="mt-2 w-full">
              <Input
                placeholder="Old Password"
                type="password"
                name="password"
                className={`w-full ${
                  errors.newPassword ? "warning-border" : ""
                }`}
                value={formData.password}
                onChange={handleChange}
              />
              <small className="warning-text">{errors.password}</small>
            </Col>

            <div className="w-full max-w-full flex-center flex-col">
              <Col sm={12} md={12} lg={8} className="mt-2 w-full">
                <Input
                  className={`w-full ${
                    errors.newPassword ? "warning-border" : ""
                  }`}
                  type="password"
                  placeholder="New Password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                <small className="warning-text">{errors.newPassword}</small>
              </Col>

              <Col sm={12} md={12} lg={8} className="mt-2 w-full">
                <Input
                  className={`w-full ${
                    errors.confirmPassword ? "warning-border" : ""
                  }`}
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <small className="warning-text">{errors.confirmPassword}</small>
              </Col>
            </div>
          </Row>
          <div className="flex-center mt-2">
            {loading ? (
              <SmallSpinner />
            ) : (
              <Button
                type="primary"
                htmlType="submit"
                className="flex justify-between items-center"
              >
                <FaKey className="mr-1" /> Change Password
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
