import { Row, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Row className="align-items-center justify-content-center">
      <Spinner
        animation="grow"
        className="d-flex align-items-center justif-content-center"
      />
    </Row>
  );
};

export default Loading;
