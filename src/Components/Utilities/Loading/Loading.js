import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Spinner
      animation="grow"
      className="d-flex align-items-center justif-content-center"
    />
  );
};

export default Loading;
