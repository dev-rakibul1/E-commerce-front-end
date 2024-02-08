import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseProduct,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";

const ProductCart = ({ setOpen, open }) => {
  const onClose = () => {
    setOpen(false);
  };

  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Drawer title="Cart" onClose={onClose} open={open}>
        {!products?.length ? (
          <h2
            className="flex-center min-height "
            style={{ fontWeight: "600", color: "#333" }}
          >
            Cart is empty
          </h2>
        ) : (
          <>
            <h3 style={{ fontWeight: "600" }}>
              Your recent add product in the cart.
            </h3>
            <h3 className="mt-1">
              Total price: {parseFloat(total).toFixed(2)}
            </h3>
          </>
        )}

        {products?.map((product) => (
          <div className="" key={product?._id}>
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
                  {(parseFloat(product?.price) * product?.quantity).toFixed(2)}
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
      </Drawer>
    </>
  );
};
export default ProductCart;
