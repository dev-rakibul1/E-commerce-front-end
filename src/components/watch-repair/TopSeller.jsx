import { Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import ProductList from "../products/ProductList";

const TopSeller = () => {
  const [topSellerProduct, setTopSellerProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data using fetch
    fetch("http://localhost:7000/api/v1/product/top-seller/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTopSellerProduct(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div>
      {/* Product list */}
      <div className="root-container mx-auto ">
        <Spin style={{ minHeight: "50vh" }} spinning={loading}>
          <Row className="product-box mx-auto ">
            {topSellerProduct?.data?.map((product) => (
              <ProductList key={product._id} product={product} />
            ))}
          </Row>
        </Spin>
      </div>
    </div>
  );
};

export default TopSeller;
