import { Button, Col, Row } from "antd";
import React from "react";
import "./WatchRepairs.css";

const WatchRepairs = () => {
  return (
    <div
      style={{ position: "relative", padding: "15px", marginTop: "50px" }}
      className=" "
    >
      <div className="root-container flex items-center justify-between min-height ">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} xl={24}>
            <div className="watch-repair" style={{ maxWidth: "50%" }}>
              <h1>Watch Repair Services</h1>
              <p>
                Our Reprizo repair centers are staffed with professionally
                trained, expert watchmakers that service all brands of
                timepieces, from Timex to Rolex. Whether it’s a wristwatch,
                pocket watch, stopwatch, clock or any other timepiece, we have
                exceptiona...
              </p>
              <Button type="primary" size="large">
                LEARN MORE
              </Button>
            </div>
          </Col>
        </Row>

        <div className="watch-repair-image">
          <img
            src="/images/display-watch/watch-repear.png"
            className="max-w-full"
            alt=""
          />
        </div>
      </div>

      <div className="our-best-seller " style={{ marginTop: "50px" }}>
        <h1>Our Best Sellers</h1>
      </div>
    </div>
  );
};

export default WatchRepairs;
