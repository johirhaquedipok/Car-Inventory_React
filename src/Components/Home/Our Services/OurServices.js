import { Card, Col, Row } from "react-bootstrap";
import { GiCarKey, GiCartwheel, GiTechnoHeart } from "react-icons/gi";
const OurServices = () => {
  return (
    <>
      <div className="text-center my-4">
        <h2>Our Services</h2>
        <div className=" d-flex align-items-cetner justify-content-center">
          <div
            className="bg-dark mb-3"
            style={{ height: "5px", width: "80px", borderRadius: "10px" }}
          ></div>
        </div>
        <p className=" mb-3 mb-md-5">
          Highest quality service and make you feel comfortable in our capable
          hands.
        </p>
      </div>

      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="text-center">
            <div
              className="text-center d-flex align-items-center justify-content-center align-self-center mt-3"
              style={{
                height: "70px",
                width: "70px",
                backgroundColor: "aliceblue",
                borderRadius: " 50%",
              }}
            >
              <GiTechnoHeart />
            </div>
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
          <Card className="text-center">
            <div
              className="text-center d-flex align-items-center justify-content-center align-self-center mt-3"
              style={{
                height: "70px",
                width: "70px",
                backgroundColor: "aliceblue",
                borderRadius: " 50%",
              }}
            >
              <GiCarKey />
            </div>
            <Card.Body>
              <Card.Title>FREE SUPPORT</Card.Title>
              <Card.Text>
                We have professional car service partners with verified
                resources. We are making a one-stop auto service flexibility is
                our main priority.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <div
              className="text-center d-flex align-items-center justify-content-center align-self-center mt-3"
              style={{
                height: "70px",
                width: "70px",
                backgroundColor: "aliceblue",
                borderRadius: " 50%",
              }}
            >
              <GiCartwheel />
            </div>
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
    </>
  );
};

export default OurServices;
