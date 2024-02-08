import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import {
  IoCallOutline,
  IoKeyOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";

import { TfiEmail } from "react-icons/tfi";
import { useSelector } from "react-redux";
import "../pages/home/Home.css";

const randomSeed = Math.floor(Math.random() * 1000);
const imageUrl = `https://picsum.photos/seed/${randomSeed}/200/300`;

const Dashboard = () => {
  const { user, isLoading } = useSelector((state) => state.getAuthSlice);
  const [authLoading, setAuthLoading] = useState(isLoading);

  useEffect(() => {
    setAuthLoading(isLoading);
  }, [isLoading]);

  const customer = user?.data;

  return (
    <div className="flex-center flex-col">
      <h1 className="dashboard-employee-title">Welcome from Dashboard</h1>

      <div className="flex-center flex-col">
        <img
          src={
            customer?.profilePicture && customer?.profilePicture
              ? customer?.profilePicture
              : imageUrl
          }
          style={{
            maxWidth: "100%",
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "100%",
          }}
          alt="profile-img"
        />

        {authLoading ? (
          <div className="flex-center">
            <h1>Loading........</h1>
          </div>
        ) : (
          <article className="user-info">
            <h3>
              <FaRegCircleUser />
              {customer?.firstName} {customer?.middle} {customer?.lastName}
            </h3>
            <ul>
              <li>
                <IoKeyOutline />
                {customer?.role}
              </li>
              <li>
                <TfiEmail /> {customer?.email}
              </li>
              <li>
                <IoCallOutline /> {customer?.phone}
              </li>

              {customer?.role !== "customer" ? (
                <li>
                  <MdProductionQuantityLimits />{" "}
                  {`Products ${customer?.products.length}`}
                </li>
              ) : null}

              <li>
                <IoLocationOutline /> {customer?.address}
              </li>
            </ul>
          </article>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
