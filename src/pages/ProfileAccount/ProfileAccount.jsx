import { Col, Row } from "antd";
import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import "./ProfileAccount.css";

const ProfileAccount = () => {
  const { employee } = useContext(AuthContext);
  const employeeInfo = employee?.data;

  const randomSeed = Math.floor(Math.random() * 1000);
  const imageUrl = `https://picsum.photos/seed/${randomSeed}/200/300`;

  return (
    <div>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* First Child: 6 columns */}
        <Col xs={24} sm={24} md={6}>
          <div className="">
            <div className="profile">
              <img
                src={
                  employeeInfo?.profilePicture
                    ? employeeInfo?.profilePicture
                    : imageUrl
                }
                alt=""
                className="profile-pic"
              />
              <div className="name capitalize">{`${employeeInfo?.firstName} ${employeeInfo?.middleName} ${employeeInfo?.lastName}`}</div>
              <div className="job capitalize">
                Role: {`${employeeInfo?.role}`}
              </div>
            </div>
            <div className="sidenav-url">
              <div className="url">
                <Link
                  to={`/edit-profile/${employeeInfo?._id}`}
                  className="active"
                >
                  Edit <FaEdit />
                </Link>
              </div>
            </div>
          </div>
        </Col>

        {/* Second Child: 18 columns on larger screens, 12 columns on md screens */}
        <Col xs={24} sm={24} md={12} lg={18}>
          <div className="main">
            <div className="card">
              <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>

                <table>
                  <tbody>
                    <tr>
                      <td>Role</td>
                      <td>:</td>
                      <td className="capitalize">{`${employeeInfo?.role}`}</td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>:</td>
                      <td className="capitalize">{`${employeeInfo?.firstName} ${employeeInfo?.middleName} ${employeeInfo?.lastName}`}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>:</td>
                      <td>{`${employeeInfo?.email}`}</td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td>:</td>
                      <td>{`${employeeInfo?.phone}`}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>:</td>
                      <td>{`${employeeInfo?.gender}`}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>{`${employeeInfo?.address}`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileAccount;
