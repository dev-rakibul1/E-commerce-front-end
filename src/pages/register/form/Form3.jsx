import { Button } from "antd";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import "../Register.css";

const Form3 = (payload) => {
  const [visibleNewPassword, setVisibleNewPassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const { formData, prev, next, handleInputFields, errors, setFormData } =
    payload.payload;

  const handleVisableNewPassword = () => {
    setVisibleNewPassword(!visibleNewPassword);
  };
  const handleVisableConfirmPassword = () => {
    setVisibleConfirmPassword(!visibleConfirmPassword);
  };

  return (
    <>
      {/* user info */}
      <div className="register-form-wrapper">
        <form>
          {/* Email */}
          <div className="register-input-control">
            <input
              type="email"
              placeholder="Your Email address"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputFields}
              className={` ${errors.email ? "warngin-border" : ""}`}
            />
            <label htmlFor="email" className="register-icons-wrap">
              <AiOutlineMail className="register-icons" />
            </label>
          </div>
          <small className="warning-text">{errors.email}</small>

          {/* Phone number */}
          <div className="register-input-control">
            <input
              type="number"
              placeholder="Phone number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputFields}
              className={` ${errors.phone ? "warngin-border" : ""}`}
            />
            <label htmlFor="phone" className="register-icons-wrap">
              <MdOutlinePhoneEnabled className="register-icons" />
            </label>
          </div>
          <small className="warning-text">{errors.phone}</small>

          {/* Password */}
          <div className="register-input-control">
            <input
              placeholder="Password"
              id="password"
              type={visibleNewPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputFields}
              className={`register-icons ${
                errors.password ? "warngin-border" : ""
              }`}
            />
            <label
              htmlFor="password"
              className="register-icons-wrap"
              onClick={handleVisableNewPassword}
            >
              {visibleNewPassword ? (
                <VscEye className="register-icons" />
              ) : (
                <VscEyeClosed className="register-icons" />
              )}
            </label>
          </div>
          <small className="warning-text">{errors.password}</small>

          {/* Confirm Password */}
          <div className="register-input-control">
            <input
              type={visibleConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputFields}
              className={` ${errors.confirmPassword ? "warngin-border" : ""}`}
            />
            <label
              htmlFor="confirmPassword"
              className="register-icons-wrap"
              onClick={handleVisableConfirmPassword}
            >
              {visibleConfirmPassword ? (
                <VscEye className="register-icons" />
              ) : (
                <VscEyeClosed className="register-icons" />
              )}
            </label>
          </div>
          <small className="warning-text">{errors.confirmPassword}</small>

          <div className="register-button">
            <Button
              htmlType="submit"
              type="primary"
              onClick={prev}
              style={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Previous
            </Button>
            <Button
              htmlType="submit"
              type="primary"
              onClick={(e) => next(e)}
              style={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form3;
