import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductListComp from "../../components/productListComp/ProductListComp";

const ProductList = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.getAuthSlice);

  return (
    <div>
      <div className="user-details-container">
        {/* Topbar */}
        <div className="topbar">
          <button
            className="action-button"
            onClick={() => window.history.back()}
          >
            <RiArrowGoBackLine className="mr-1" /> Back
          </button>

          {/* <div className="topbar">
            <Link to={`/update/`}>
              <button className="action-button px-2">
                <RiPencilLine className="mr-1" /> Update
              </button>
            </Link>

            <button className="action-button px-2">
              <RiDeleteBinLine className="mr-1" /> Delete
            </button>
          </div> */}
        </div>

        {/* User Details Columns */}
      </div>
      {/* Check if user data exists and pass products as prop */}
      {user && user.data && user.data.products && (
        <ProductListComp product={user.data.products} />
      )}
    </div>
  );
};

export default ProductList;
