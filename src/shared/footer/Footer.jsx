import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, Menu, Row } from "antd";

const Footer = () => {
  return (
    <footer
      style={{ background: "#f0f2f5", padding: "20px 0", marginTop: "50px" }}
      className="root-container"
    >
      <Row justify="center">
        <Col xs={24} sm={24} md={20} lg={20} xl={20}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <h3 style={{ fontWeight: "600", fontSize: "18px" }}>Company</h3>
              <Menu theme="light" style={{ marginTop: "25px" }}>
                <Menu.Item key="about" icon={<MailOutlined />}>
                  <a href="#">About Us</a>
                </Menu.Item>
                <Menu.Item key="contact" icon={<MailOutlined />}>
                  <a href="#">Contact Us</a>
                </Menu.Item>
                <Menu.Item key="services" icon={<MailOutlined />}>
                  <a href="#">Services</a>
                </Menu.Item>
              </Menu>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <h3 style={{ fontWeight: "600", fontSize: "18px" }}>Resources</h3>
              <Menu theme="light" style={{ marginTop: "25px" }}>
                <Menu.Item key="faq" icon={<AppstoreOutlined />}>
                  <a href="#">FAQ</a>
                </Menu.Item>
                <Menu.Item key="support" icon={<AppstoreOutlined />}>
                  <a href="#">Support</a>
                </Menu.Item>
                <Menu.Item key="blog" icon={<AppstoreOutlined />}>
                  <a href="#">Blog</a>
                </Menu.Item>
              </Menu>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <h3 style={{ fontWeight: "600", fontSize: "18px" }}>Legal</h3>
              <Menu theme="light" style={{ marginTop: "25px" }}>
                <Menu.Item key="privacy" icon={<SettingOutlined />}>
                  <a href="#">Privacy Policy</a>
                </Menu.Item>
                <Menu.Item key="terms" icon={<SettingOutlined />}>
                  <a href="#">Terms of Service</a>
                </Menu.Item>
              </Menu>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <h3 style={{ fontWeight: "600", fontSize: "18px" }}>Social</h3>
              <Menu theme="light" style={{ marginTop: "25px" }}>
                <Menu.Item key="facebook" icon={<SettingOutlined />}>
                  <a href="#">Facebook</a>
                </Menu.Item>
                <Menu.Item key="twitter" icon={<SettingOutlined />}>
                  <a href="#">Twitter</a>
                </Menu.Item>
                <Menu.Item key="instagram" icon={<SettingOutlined />}>
                  <a href="#">Instagram</a>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
