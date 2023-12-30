import * as React from "react";

import { Button } from "antd";
import { IoLocationOutline } from "react-icons/io5";
import "../Register.css";

const Form2 = (payload) => {
  const {
    formData,
    prev,
    next,
    handleInputFields,
    errors,
    setFormData,
    handleDateChange,
  } = payload.payload;

  return (
    <>
      {/* user info */}
      <div className="register-form-wrapper">
        <form>
          {/* Select gender */}
          <div className="register-input-control register-radio-flex">
            <h4>Select gender</h4>
            <div className="register-radio">
              <input
                type="radio"
                name="gender"
                onChange={handleInputFields}
                value="male"
                checked={formData.gender === "male"}
                id="male"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="register-radio">
              <input
                type="radio"
                name="gender"
                onChange={handleInputFields}
                value="female"
                checked={formData.gender === "female"}
                id="female"
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="register-radio">
              <input
                type="radio"
                name="gender"
                onChange={handleInputFields}
                value="others"
                checked={formData.gender === "others"}
                id="others"
              />
              <label htmlFor="others">Others</label>
            </div>
          </div>
          <small className="warning-text">{errors.gender}</small>

          {/* Address */}
          <div className="register-input-control">
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              id="address"
              onChange={handleInputFields}
              className={` ${errors.address ? "warngin-border" : ""}`}
            />
            <label className="register-icons-wrap" htmlFor="address">
              <IoLocationOutline className="register-icons" />
            </label>
          </div>
          <small className="warning-text">{errors.address}</small>

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

export default Form2;
