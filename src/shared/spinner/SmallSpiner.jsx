import { Button, Flex } from "antd";
import React from "react";

const SmallSpinner = ({ block }) => {
  return (
    <Flex gap="small" vertical>
      <Flex gap="small" align="center" wrap="wrap">
        <Button type="primary" block loading>
          Loading
        </Button>
      </Flex>
    </Flex>
  );
};
export default SmallSpinner;
