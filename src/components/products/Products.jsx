import { Button, Row, Spin } from "antd"; // Import Spin component for loading state
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TopBar from "../topbar/TopBar";
import ProductList from "./ProductList";
import "./Products.css";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const products = useLoaderData();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {/* Top bar */}
      <TopBar />

      {/* Product list */}
      <div className="root-container mx-auto ">
        <Title
          level={1}
          style={{
            margin: 0,
            textAlign: "center",
            padding: "50px 0",
            fontFamily: "Libre Baskerville !important",
          }}
        >
          Our recent products
        </Title>
        {/* Display loading spinner while data is being fetched */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "50px 0" }}>
            <Spin />
          </div>
        ) : (
          <Row className="product-box mx-auto ">
            {products?.data?.map((product) => (
              <ProductList key={product._id} product={product} />
            ))}
          </Row>
        )}
      </div>

      {/* product display */}
      <div className="" style={{ marginTop: "50px" }}>
        <div className="product-display flex-center flex-col">
          <Title
            xs={{ fontSize: "14px" }}
            sm={{ fontSize: "22px" }}
            md={{ fontSize: "40px" }}
            xl={{ fontSize: "80px" }}
          >
            70% off for new years
          </Title>
          <Paragraph
            style={{
              maxWidth: "60%",
              color: "#fff",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            Reprizo recently repaired my Panerai. My watch was fixed within 2-3
            days and I was informed at every step of the way. The price was fair
            and the service excellent. I have no problems recommending this
            company.
          </Paragraph>
          <Button size="large">Shop now</Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
