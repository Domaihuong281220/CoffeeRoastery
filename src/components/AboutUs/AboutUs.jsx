import "./styles.css";
import { NavLink } from "react-router-dom";
import { Button } from "../index";
import { withTranslation } from "react-i18next";
import aboutPic from "../../assets/Pictures/about1.jpg";
import aboutPic2 from "../../assets/Pictures/about2.jpg";
import Picbackground1 from "../../assets/Pictures/picbackground1.png";
import Picbackground2 from "../../assets/Pictures/picbackground2.png";
import { Col, Row } from "antd";
function AboutUs(props) {
  const { t } = props;
  return (
    <div className="about-us">
      <Row gutter={[8, 8]} className="left">
        <Col xs={24} sm={12} md={12} className="left1">
          <p>Say goodbye to bland blends, and hello to <span>better brews.</span></p>
        </Col>
        <Col xs={24} sm={12} md={12}>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={24}>
              <div className="h1">Intense flavor</div>
              <div className="p">The pressurized brewing technique enables the Delo to brew up to 5x stronger coffee.</div>
            </Col>
            <Col className="gutter-row" span={24}>
              <div className="h1">Less bitter taste</div>
              <div className="p">The improved design distributes heat to create a less bitter, more flavorful experience.</div>
            </Col>
            <Col className="gutter-row" span={24}>
              <div className="h1">The sustainable choice</div>
              <div className="p">The Delo is affordable, durable, low maintenance, and requires no electricity.</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default withTranslation()(AboutUs);
