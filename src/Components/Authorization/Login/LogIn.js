import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Error from "../../Utilities/Error/Error";
import Loading from "../../Utilities/Loading/Loading";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    <Loading />;
  }
  let err;
  if (error) {
    err = <Error error={error} />;
  }
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <Row className="align-items center justify-content-center mt-5">
      <Col xs={1} md={4} lg={4}>
        {err}
        <Form onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label placeholder="Enter email">Email address</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name={"password"}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <SocialSignIn />
        <div className=" d-flex align-items-center justify-content-center">
          No account?
          <Button variant="link" as={Link} to="/signup">
            Sign Up
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default LogIn;
