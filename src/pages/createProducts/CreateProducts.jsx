import { Button, Col, Form, Input, Row, Select, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCreateProductMutation } from "../../redux/api/userApiSlice";

const { Option } = Select;

const CreateProducts = () => {
  // const navigate = useNavigate();
  const { user: userId } = useSelector((state) => state.getAuthSlice);
  const user = userId?.data?._id;
  const accessToken = localStorage.getItem("accessToken"); // Retrieve token from localStorage

  // console.log(user);
  const [responseServerError, setResponseServerError] = useState("");
  const [createProducts, { isLoading, error, isError, isSuccess, data }] =
    useCreateProductMutation();

  if (isSuccess) {
    alert("product create success!");
  }

  useEffect(() => {
    if (isError) {
      setResponseServerError(error?.data?.message);
    } else {
      setResponseServerError("");
    }
  }, [isError, error]);

  // useEffect(() => {
  //   if (isSuccess && data) {
  //     localStorage.get("accessToken");
  //     // navigate("/");
  //   }
  // }, [isSuccess, data]);

  const onFinish = async (values) => {
    try {
      // Include the token in the headers
      const res = await createProducts(
        { ...values, user },
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <>
      {responseServerError && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              background: "#ffd3d3",
              padding: "10px",
              textAlign: "center",
              maxWidth: "100%",
              width: "320px",
              color: "red",
              display: "flex",
              borderRadius: "4px",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "0.875rem",
            }}
          >
            {responseServerError}
          </span>
        </div>
      )}

      {isLoading && <Spin />}

      <Form name="product_form" onFinish={onFinish} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Model"
              name="model"
              rules={[{ required: true, message: "Please input the model!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Brand"
              name="brand"
              rules={[{ required: true, message: "Please input the brand!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Availability"
              name="availability"
              rules={[
                { required: true, message: "Please select availability!" },
              ]}
            >
              <Select>
                <Option value={true}>Available</Option>
                <Option value={false}>Not Available</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Case Diameter"
              name="case_diameter"
              rules={[
                { required: true, message: "Please input the case diameter!" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Case Material"
              name="case_material"
              rules={[
                { required: true, message: "Please input the case material!" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Case Thickness"
              name="case_thickness"
              rules={[
                { required: true, message: "Please input the case thickness!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Color Options"
              name="color_options"
              rules={[
                { required: true, message: "Please input the color options!" },
              ]}
            >
              <Select mode="tags" placeholder="Select color options">
                {/* Add options dynamically if needed */}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Currency"
              name="currency"
              rules={[
                { required: true, message: "Please select the currency!" },
              ]}
            >
              <Select>
                <Option value="USD">USD</Option>
                <Option value="TK">TK</Option>
                <Option value="EUR">EUR</Option>
                {/* Add other currency options */}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Features"
              name="features"
              rules={[
                { required: true, message: "Please input the features!" },
              ]}
            >
              <Select mode="tags" placeholder="Select features">
                {/* Add options dynamically if needed */}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Functions"
              name="functions"
              rules={[
                { required: true, message: "Please input the functions!" },
              ]}
            >
              <Select mode="tags" placeholder="Select functions">
                {/* Add options dynamically if needed */}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Movement"
              name="movement"
              rules={[
                { required: true, message: "Please input the movement!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please input the price!" }]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Strap Material"
              name="strap_material"
              rules={[
                { required: true, message: "Please input the strap material!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Strap Width"
              name="strap_width"
              rules={[
                { required: true, message: "Please input the strap width!" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Form.Item
              label="Water Resistance"
              name="water_resistance"
              rules={[
                {
                  required: true,
                  message: "Please input the water resistance!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Form.Item
            label="Image URL"
            name="image_url"
            rules={[
              { required: true, message: "Please input the image URL!" },
              { type: "url", message: "Please enter a valid URL!" }, // URL validation rule
            ]}
          >
            <Input />
          </Form.Item>

          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input the description!" },
              ]}
            >
              <Input.TextArea style={{ minHeight: "20vh" }} />
            </Form.Item>
          </Col>
          {/* Add other fields */}
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProducts;
