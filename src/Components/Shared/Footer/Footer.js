import { Col, Row } from "react-bootstrap";
import { BsHouse, BsLink, BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Row className=" my-2">
      <Col md={4}>
        <div className=" mb-4">
          <h2>Car Invento</h2>
          <p>Get extra speed with our super charged cars.</p>
        </div>
      </Col>
      <Col md={4}>
        <div className=" mb-4 ml-md-5">
          <h2>Quick Links</h2>
          <ul style={{ listStyle: "none" }} className="list-unstyled">
            <li>
              <a href="#home" className="py-2 d-block text-decoration-none">
                Home
              </a>
            </li>
            <li>
              <a
                href="#home#welcome"
                className="py-2 d-block text-decoration-none"
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                href="#home#service"
                className="py-2 d-block text-decoration-none"
              >
                Service
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                href="#"
                className="py-2 d-block text-decoration-none"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link to="/aboutme" className="py-2 d-block text-decoration-none">
                AboutMe
              </Link>
            </li>
          </ul>
        </div>
      </Col>

      <Col md={4}>
        <div className=" mb-4">
          <h2>Office</h2>
          <div className="mb-3">
            <ul className="list-unstyled">
              <li className="d-flex align-items-center ">
                <span className="me-1 ">
                  <BsHouse />
                </span>
                <span>Narayanganj, Dhaka, Bangladesh</span>
              </li>
              <li className="d-flex align-items-center ">
                <span className="me-1 ">
                  <BsPhone />
                </span>
                <span>+088</span>
              </li>
              <li className="d-flex align-items-center ">
                <span className="me-1 ">
                  <BsLink />
                </span>

                <span className="text-break">
                  https://github.com/johirhaquedipok
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
