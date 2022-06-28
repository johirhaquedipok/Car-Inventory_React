import { Col, Container, Row } from "react-bootstrap";
import { BsHouse, BsLink, BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container>
      <Row className=" my-4 pt-3 ">
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
                <Link to="/home" className="py-2 d-block text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/inventory"
                  className="py-2 d-block text-decoration-none"
                >
                  The Inventory
                </Link>
              </li>
              <li>
                <Link
                  to="/myitem"
                  className="py-2 d-block text-decoration-none"
                >
                  My Item
                </Link>
              </li>
              <li>
                <Link to="/addin" className="py-2 d-block text-decoration-none">
                  Add Item
                </Link>
              </li>
              <li>
                <Link to="/blog" className="py-2 d-block text-decoration-none">
                  Blog
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
                  <span>(+088) 01645007180</span>
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
    </Container>
  );
};

export default Footer;
