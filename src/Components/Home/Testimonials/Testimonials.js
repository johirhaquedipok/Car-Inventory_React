import { Col, Image, Row } from "react-bootstrap";

const Testimonials = () => {
  return (
    <>
      <Row className="text-rigth my-md-5 my-3">
        <Col className="md-6 align-self-center">
          <Image
            fluid
            src="https://www.mechanicar.com/wp-content/uploads/job-manager-uploads/featured_image/2020/03/12-1024x640.jpg"
            alt="img"
          ></Image>
        </Col>
        <Col className="md-6">
          <div className=" my-4">
            <h2>Read More</h2>
            <div className=" ">
              <div
                className="bg-dark mb-3"
                style={{ height: "5px", width: "80px", borderRadius: "10px" }}
              ></div>
            </div>
            <h6 className=" mb-3">Read More dealings and Services.</h6>
            <p className=" my-2 mb-md-4">
              As the leading Subaru Dealership in White Plains & the greater
              Greenwich & Stamford, CT area, Rye Subaru is a well-loved
              family-run dealership that has been in business for more than 50
              years. We offer an exciting range of Subaru car models here, and
              you can expect to find the best auto financing options as well as
              Subaru service and parts at our dealership. The service never
              stops once you visit us here at Rye Subaru. There’s never been a
              better time to drop on by at our dealership here in 1175 Boston
              Post Rd Rye, NY so visit us today and get to experience the Rye
              Subaru difference!.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Testimonials;
