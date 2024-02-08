import { ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Button, Col, Rate, Row } from "antd";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/cartSlice";
import PrivateRoute from "../privateRoute/PrivateRoute";

const ProductsDetails = () => {
  const navigate = useNavigate();
  const product = useLoaderData();
  const {
    brand,
    price,
    ratings,
    image_url,
    model,
    functions,
    features,
    color_options,
    availability,
    description,
  } = product?.data;

  const images = [
    {
      original: image_url ? image_url : "https://i.ibb.co/BgyhKQS/watch-6.png",
      thumbnail: image_url ? image_url : "https://i.ibb.co/BgyhKQS/watch-6.png",
    },
    {
      original: "https://i.ibb.co/BgyhKQS/watch-6.png",
      thumbnail: "https://i.ibb.co/BgyhKQS/watch-6.png",
    },
    {
      original: "https://i.ibb.co/x2H77jG/watch-7.png",
      thumbnail: "https://i.ibb.co/x2H77jG/watch-7.png",
    },
    {
      original: "https://i.ibb.co/NLKwG5y/watch-11.png",
      thumbnail: "https://i.ibb.co/NLKwG5y/watch-11.png",
    },
    {
      original: "https://i.ibb.co/VJCk0QP/watch-12.png",
      thumbnail: "https://i.ibb.co/VJCk0QP/watch-12.png",
    },
    {
      original: "https://i.ibb.co/6sPVJ5x/watch-2.png",
      thumbnail: "https://i.ibb.co/6sPVJ5x/watch-2.png",
    },
  ];

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  // console.log(products);

  const handleProduct = (pro) => {
    dispatch(addToCart(pro));
  };

  const handleRedirectCheckoutPage = () => {
    if (!products.length) {
      alert("Please add a product and try again.");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="root-container">
      <Row gutter={[16, 16]}>
        <Col xs={11} sm={10} md={10} xl={10} style={{ margin: "40px" }}>
          <div className="">
            <ImageGallery items={images} />
          </div>
        </Col>
        <Col xs={11} sm={10} md={10} xl={10} style={{ margin: "40px" }}>
          <article className="product-details-content ">
            <div className="">
              <h2>
                {brand} -{" "}
                <small style={{ color: "blue", fontSize: "19px" }}>
                  {model}
                </small>
              </h2>

              <p>{description}</p>
              <div className="mt-2">
                <span>
                  <Rate
                    allowHalf
                    disabled
                    defaultValue={ratings?.average ? ratings?.average : 0}
                  />
                  {/* {ratings.average} <StarOutlined /> */}
                </span>{" "}
                ({ratings?.count ? ratings?.count : 0} reviews)
              </div>
              <h3 className="mt-1 flex items-center justify-start">
                <span>${price}</span>{" "}
                <del style={{ paddingLeft: "10px" }}>$150</del>{" "}
                <span
                  style={{
                    marginLeft: "25px",
                    background: "#cecece",
                    padding: "3px 15px",
                    borderRadius: "30px",
                    display: "inline-block",
                  }}
                >
                  80% off
                </span>
              </h3>

              <div className="mt-2">
                <h3 style={{ fontWeight: "500" }}>Functionality:</h3>
                {functions?.map((fn, i) => (
                  <span style={{ paddingRight: "10px" }} key={i}>{`${
                    i + 1
                  }. ${" "} ${fn}`}</span>
                ))}
              </div>

              <div className="mt-2">
                <h3 style={{ fontWeight: "500" }}>Features:</h3>
                {features?.map((fn, i) => (
                  <span style={{ paddingRight: "10px" }} key={i}>{`${
                    i + 1
                  }. ${" "} ${fn}`}</span>
                ))}
              </div>

              <div className="mt-2">
                <h3 style={{ fontWeight: "500" }}>Color options:</h3>
                {color_options?.map((fn, i) => (
                  <span style={{ paddingRight: "10px" }} key={i}>{`${
                    i + 1
                  }. ${" "} ${fn}`}</span>
                ))}
              </div>

              {/* <div className="mt-2 w-full">
                <h3 style={{ fontWeight: "500" }}>Product quantity:</h3>
                <div className="flex justify-start items-center mt-1">
                  <button
                    className="product-quantity-button"
                    onClick={() => dispatch(decreaseProduct(product))}
                  >
                    <MinusOutlined />
                  </button>
                  <span style={{ padding: "0 20px", fontSize: "15px" }}>
                    {product?.quantity}
                  </span>
                  <button
                    className="product-quantity-button"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <PlusOutlined />
                  </button>
                </div>
              </div> */}

              <div className="mt-2 w-full">
                <h3 style={{ fontWeight: "500" }}>Color select:</h3>

                <div className="select-color-options flex justify-start items-center mt-1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="mt-2">
                {availability ? "Stock in" : "Stock out"}
                <br />
                {availability ? (
                  <span>Order now and Delivered in 2 working days.</span>
                ) : null}
                <br />

                <div className="mt-2">
                  <Button
                    type="primary"
                    onClick={() => handleProduct(product?.data)}
                  >
                    Add to cart <ShoppingOutlined />
                  </Button>
                  <PrivateRoute>
                    <Button
                      type="primary"
                      style={{ marginLeft: "15px" }}
                      onClick={handleRedirectCheckoutPage}
                    >
                      Buy now <ShoppingCartOutlined />
                    </Button>
                  </PrivateRoute>
                </div>
              </div>
            </div>
          </article>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsDetails;
