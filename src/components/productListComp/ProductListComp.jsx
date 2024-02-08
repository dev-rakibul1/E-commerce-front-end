import { Avatar, Button, Table } from "antd";
import React from "react";

const ProductListComp = ({ product }) => {
  //   console.log(product);

  const columns = [
    {
      title: "Avatar",
      key: "avatar",
      render: (text, record) => <Avatar src={record.image_url} />,
    },

    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Price",
      key: "price",
      render: (text, record) => <span>${record.price}</span>,
    },
    {
      title: "Details",
      key: "details",
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => handleDetails(record)}>
            Details
          </Button>
        </span>
      ),
    },
    {
      title: "Update",
      key: "update",
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => handleUpdate(record)}>
            Update
          </Button>
        </span>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const handleUpdate = (record) => {
    // Handle update logic here
    console.log("Update", record);
  };

  const handleDelete = (record) => {
    // Handle delete logic here
    console.log("Delete", record);
  };

  const handleDetails = (record) => {
    // Handle details logic here
    console.log("Details", record);
  };

  return (
    <Table
      columns={columns}
      dataSource={product}
      pagination={false} // Disable pagination if you don't want it
    />
  );
};

export default ProductListComp;
