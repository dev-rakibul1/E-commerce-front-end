import {
  BulbOutlined,
  DashboardOutlined,
  HomeOutlined,
  LogoutOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button } from "antd";
import { useState } from "react";
import {
  MdOutlineAddShoppingCart,
  MdShoppingCartCheckout,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductCart from "../../components/cart/ProductCart";
import { authKey } from "../../constants/storageKey";

import {
  isLoggedIn,
  removeUserInformation,
} from "../../services/auth.services";
import "./Navbar.css";
const randomSeed = Math.floor(Math.random() * 1000);
const imageUrl = `https://picsum.photos/seed/${randomSeed}/200/300`;

const navbarItems = (role) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useSelector((state) => state.getAuthSlice);
  // console.log(user);
  const profileImage = user?.data;
  // console.log("Profile pic____", profileImage?.profilePicture);

  const userLogin = isLoggedIn();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { products } = useSelector((state) => state.cart);
  const totalProductAdded = products.length;
  // console.log(totalProductAdded);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeUserInformation(authKey);
    navigate("/auth/login");
  };

  const defaultSidebarItems = [
    {
      label: <Link to="/">Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/products">Products</Link>,
      key: "products",
      icon: <ShoppingOutlined />,
    },
    {
      label: <Link to="/blog">Blog</Link>,
      key: "blog",
      icon: <BulbOutlined />,
    },
    {
      label: (
        <Badge count={totalProductAdded}>
          <span>
            <Button
              type="primary"
              onClick={showDrawer}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            >
              <span className="flex-enter">
                <MdOutlineAddShoppingCart className="mr-1" />
                Cart
              </span>
            </Button>
            <ProductCart setOpen={setOpen} open={open} />
          </span>
        </Badge>
      ),
      key: "cart",
    },
  ];

  const includeDashboard = [
    {
      label: <Link to="/checkout">Checkout</Link>,
      key: "checkout",
      icon: <MdShoppingCartCheckout />,
    },
    {
      label: (
        <Avatar
          size="large"
          src={
            profileImage?.profilePicture
              ? profileImage?.profilePicture
              : imageUrl
          }
        />
      ),
      key: "/user",
      children: [
        {
          label: <Link to={`/dashboard`}>Dashboard</Link>,
          icon: <DashboardOutlined />,
          key: `/dashboard`,
        },
        {
          label: (
            <span onClick={handleLogOut}>
              <LogoutOutlined className="mr-1" /> Logout
            </span>
          ),
          key: `/logout`,
        },
      ],
    },
  ];

  const withDashboardAndDefaultUi = [
    ...defaultSidebarItems,
    ...includeDashboard,
  ];

  if (userLogin) return withDashboardAndDefaultUi;
  else return defaultSidebarItems;
};

export default navbarItems;
