import { Button, Col, Rate } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/cartSlice";
import "./Products.css";

const ProductList = ({ product }) => {
  const { brand, price, ratings, image_url, _id } = product;
  const dispatch = useDispatch();

  const handleProduct = (pro) => {
    dispatch(addToCart(pro));
  };

  return (
    <>
      <Col
        style={{ margin: "23px" }}
        xs={24}
        sm={12}
        md={8}
        xl={5}
        className="product-items"
      >
        <div className="product-image">
          <img
            src={image_url ? image_url : "https://i.ibb.co/BgyhKQS/watch-6.png"}
            alt=""
          />
          <div className="product-hover">
            <Link to={`/product-details/${_id}`}>
              <Button>View More</Button>
            </Link>

            <Button onClick={() => handleProduct(product)}>Add to Cart</Button>
          </div>
          <div className="product-details flex justify-between items-start flex-col">
            <div className="flex justify-between items-start flex-col">
              <span>Price: {price}</span>
              <span>
                Ratings:{" "}
                <Rate
                  allowHalf
                  disabled
                  defaultValue={parseInt(
                    ratings?.average ? ratings?.average : 0
                  )}
                />
              </span>
            </div>
            <div className="">
              <h4>
                Brand:{" "}
                {brand.length > 15 ? brand.substring(0, 15) + "..." : brand}
              </h4>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProductList;
