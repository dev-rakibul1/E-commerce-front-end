import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Input, Radio, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseProduct,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import "./CheckOutPage.css";
const { TextArea } = Input;

const CheckOutPage = () => {
  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div
      className="root-container"
      style={{ marginTop: "50px", padding: "15px" }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={16} lg={16}>
          <div style={{ paddingRight: "16px" }}>
            <h2>Delivery Information</h2>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Input placeholder="Name" style={{ marginBottom: "16px" }} />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Input
                  placeholder="Phone Number"
                  style={{ marginBottom: "16px" }}
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Input placeholder="Email" style={{ marginBottom: "16px" }} />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Input placeholder="City" style={{ marginBottom: "16px" }} />
              </Col>
              <Col span={24}>
                <Input placeholder="Address" style={{ marginBottom: "16px" }} />
              </Col>
            </Row>
            <div style={{ marginBottom: "16px" }}>
              <h3>Scheduled Delivery:</h3>
              <DatePicker
                showTime
                style={{ width: "100%", marginBottom: "16px" }}
                placeholder="Select Date and Time"
              />
              <TextArea placeholder="Note" rows={4} />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <h3>Payment Method:</h3>
              <Radio.Group defaultValue="online">
                <Radio value="online">Online Payment</Radio>
                <Radio value="cod">Cash on Delivery</Radio>
              </Radio.Group>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          <div style={{ paddingLeft: "16px" }}>
            <h2>Order Summary</h2>
            <div>
              <div
                style={{ paddingLeft: "16px" }}
                className="checkout-product-box"
              >
                {products?.map((product) => (
                  <div key={product?._id}>
                    <div className="cart-content flex justify-start items-center">
                      <img
                        src={product?.image_url}
                        style={{ maxWidth: "45%" }}
                        alt="product"
                      />
                      <div className="">
                        <h4 style={{ fontWeight: "500" }}>{product?.brand}</h4>
                        <p>Quantity: {product?.quantity}</p>
                        <p>
                          Price: $
                          {(
                            parseFloat(product?.price) * product?.quantity
                          ).toFixed(2)}
                        </p>
                        <div className="cart-button">
                          <div className="flex justify-start items-center mt-1 ">
                            <button
                              className="product-quantity-button"
                              onClick={() => dispatch(decreaseProduct(product))}
                            >
                              <MinusOutlined />
                            </button>
                            <button
                              className="product-quantity-button ml-1"
                              onClick={() => dispatch(addToCart(product))}
                            >
                              <PlusOutlined />
                            </button>
                            <button
                              className="product-quantity-button ml-1"
                              onClick={() => dispatch(removeFromCart(product))}
                            >
                              <DeleteOutlined />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex justify-between"
                style={{ marginTop: "20px", width: "100%", maxWidth: "100%" }}
              >
                <div className="">
                  <p className="mt-1">Sub Total:</p>
                  <p className="mt-1">Shipping Charge:</p>
                  <h3 className="mt-1">Total: </h3>
                </div>
                <div className="">
                  <p className="mt-1">${total.toFixed(2)}</p>
                  <p className="mt-1">${(total * 0.05).toFixed(2)}</p>
                  <h3 className="mt-1">${(total * 1.05).toFixed(2)}</h3>
                </div>
              </div>
              <Button type="primary" block className="mt-2">
                Checkout
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CheckOutPage;
