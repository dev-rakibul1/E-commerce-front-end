import { Button } from "antd";
import { useEffect, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useCreateEmployeeMutation } from "../../../redux/api/employeeApiSlice";
import SmallSpinner from "../../../shared/spinner/SmallSpiner";
import "../Register.css";

const Form4 = (payload) => {
  const { formData, prev, setErrors, errors } = payload.payload;
  const navigate = useNavigate();
  const [visiblePass, setVisiblePass] = useState(false);
  // Get, POST method form Redux
  const [createEmployee, { error, isLoading, isError, isSuccess }] =
    useCreateEmployeeMutation({
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    });

  useEffect(() => {
    if (isError) {
      error?.data?.errorMessages?.map((data) => setErrors(data));
    } else {
      setErrors("");
    }
  }, [isError, error, setErrors]);

  const handleVisablePass = () => {
    setVisiblePass(!visiblePass);
  };

  // console.log(errors);

  // console.log("Step - 4:", formData);

  const handleUserFormSubmit = async (e) => {
    e.preventDefault();

    createEmployee(formData);
    console.log("User form submit___:", formData);
  };

  if (isSuccess) {
    navigate("/");
  }

  return (
    <>
      {/* user info */}
      <div className="register-form-wrapper">
        <form onSubmit={handleUserFormSubmit}>
          <article className="">
            <h5
              style={{
                padding: "10px 0",
                textAlign: "center",
                fontSize: "17px",
              }}
            >
              Your submission
            </h5>

            {errors?.message && (
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
                  {errors?.message}
                </span>
              </div>
            )}
            {/* name info */}
            <div style={{}}>
              <div className="">
                {/* First name */}
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    marginTop: "10px",
                  }}
                >
                  First Name
                </h4>
                <h5
                  style={{
                    fontSize: "14px",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  {formData.firstName}
                </h5>
              </div>

              {/* middle name */}
              <div className="">
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    marginTop: "10px",
                  }}
                >
                  Middle Name
                </h4>
                <h5
                  style={{
                    fontSize: "14px",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  {formData.middleName ? formData.middleName : "Empty"}
                </h5>
              </div>
              <div className="">
                {/* last name */}
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    marginTop: "10px",
                  }}
                >
                  Last Name
                </h4>
                <h5
                  style={{
                    fontSize: "14px",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  {formData.lastName}
                </h5>
              </div>
            </div>

            {/* Gender and address info */}
            <div style={{}}>
              {/* Gender */}
              <div className="">
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    marginTop: "10px",
                  }}
                >
                  Gender
                </h4>
                <h5
                  style={{
                    fontSize: "14px",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  {formData.gender}
                </h5>
              </div>

              {/* address */}
              <div className="">
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    marginTop: "10px",
                  }}
                >
                  Address
                </h4>
                <h5
                  style={{
                    fontSize: "14px",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  {formData.address}
                </h5>
              </div>
            </div>
            {/*Email number */}
            <h4
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                display: "inline-block",
                color: "#040",
                marginTop: "10px",
              }}
            >
              Email Address
            </h4>
            <h5
              style={{
                fontSize: "14px",
                textTransform: "lowercase",
                fontWeight: "400",
              }}
            >
              {formData.email}
            </h5>
            {/*Mobile number */}
            <h4
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                display: "inline-block",
                color: "#040",
                marginTop: "10px",
              }}
            >
              Mobile Number
            </h4>
            <h5
              style={{
                fontSize: "14px",
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              {formData.phone}
            </h5>

            {/*Password */}
            <h4
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                display: "inline-block",
                color: "#040",
                marginTop: "10px",
              }}
            >
              Password
            </h4>
            <h5
              style={{
                fontSize: "14px",
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <input
                  className="final-submit-pass-fields"
                  type={visiblePass ? "text" : "password"}
                  value={formData.password}
                  readOnly
                />

                <span
                  style={{ color: "#040", fontSize: "25px", cursor: "pointer" }}
                  onClick={handleVisablePass}
                >
                  {visiblePass ? <VscEye /> : <VscEyeClosed />}
                </span>
              </div>
            </h5>
          </article>

          <div
            style={{
              marginTop: "15px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              htmlType="submit"
              type="primary"
              onClick={prev}
              style={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Previous
            </Button>

            {isLoading ? (
              <SmallSpinner color="white" />
            ) : (
              <Button
                htmlType="submit"
                type="primary"
                className="login-register"
                style={{ textTransform: "capitalize", fontWeight: "bold" }}
              >
                Final Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Form4;
