import { Button, Form } from "react-bootstrap";

const Counter = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    const myNumber = e.target.number1.value;
    console.log(myNumber);
  };

  return (
    <>
      <div>1</div>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label placeholder="Enter email">Email address</Form.Label>
          <Form.Control
            required
            name="number1"
            type="number"
            min="0"
            placeholder="Enter number"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Counter;
