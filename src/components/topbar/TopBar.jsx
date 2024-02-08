import { Typography } from "antd";
import React from "react";
import "./TopBar.css";
const { Title } = Typography;

const TopBar = () => {
  return (
    <div>
      <div className="top-bar-image">
        <div
          className="root-container flex-center"
          style={{ minHeight: "60vh" }}
        >
          <article className="topbar-text flex items-center justify-center flex-col">
            <Title level={3} style={{ color: "#fff" }}>
              Search Your products
            </Title>

            <input
              type="search"
              name=""
              id=""
              placeholder="Search your products..."
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
