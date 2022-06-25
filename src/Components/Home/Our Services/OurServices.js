import { Card, Col, Row } from "react-bootstrap";
import { GiCarKey } from "react-icons/gi";
const OurServices = () => {
  return (
    <Row xs={1} md={3} className="g-4">
      <Col>
        <Card>
          <GiCarKey />
          <Card.Body>
            <Card.Title>ALL BRANDS</Card.Title>
            <Card.Text>
              Tap into a better car shopping experience with price drops and
              ranked the top '22 models in our American-Made Index.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>FREE SUPPORT</Card.Title>
            <Card.Text>
              We have professional car service partners with verified resources.
              We are making a one-stop auto service flexibility is our main
              priority.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>DEALERSHIP</Card.Title>
            <Card.Text>
              Which cars have the biggest impact on the economy? We ranked the
              top '22 models in our American-Made Index.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default OurServices;
