import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const SingleInventory = () => {
  const { id } = useParams();

  const [resId, setResId] = useState("");
  const [qty, setQty] = useState("");
  const [suplier, setSupplier] = useState("");
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/inventories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setResId(data._id);
        setQty(data.quantity);
        setSupplier(data.supllierName);
        setImg(data.img);
        setName(data.name);
        setPrice(data.price);
        setDes(data.description);
      });
  }, [id]);

  const handleDeleteQty = (id) => {
    setQty((pre) => pre - 1);

    fetch(`http://localhost:5000/inventories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: qty }),
    })
      .then((res) => res.json())
      .then((data) => {
        setQty(data.quantity);
      });
  };

  const handleAddQty = (e) => {
    e.preventDefault();
    let number = e.target.inputNumber;
    if (number.value > 0) {
      setQty((pre) => pre + parseInt(number.value));
    }
  };
  return (
    <Row>
      <Col>
        <Card className="h-100 border-0">
          <Card.Img variant="top" src={img} alt={name} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <div className="d-md-flex align-md-items-center justify-content-md-between">
              <div>
                <Card.Text>${price}</Card.Text>
                <Card.Text>{des}</Card.Text>
                <Card.Text>Supplier: {suplier}</Card.Text>
              </div>
              <div>
                <Button
                  variant="danger"
                  className="mb-3 mt-sm-3"
                  onClick={() => handleDeleteQty(resId)}
                  disabled={qty > 0 ? false : true}
                >
                  Delivered
                </Button>
                <Card.Text>Qty: {qty}</Card.Text>
                <div>
                  <Card.Text>Input Some quantity</Card.Text>

                  <Form onSubmit={handleAddQty}>
                    <Form.Control
                      className="w-md-50 mb-2"
                      size="sm"
                      type="number"
                      min="0"
                      name="inputNumber"
                      placeholder="type qty"
                    />
                    <Button type="submit">Add Qty</Button>
                  </Form>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Button as={Link} to="/managein">
        Manage Inventory
      </Button>
    </Row>
  );
};

export default SingleInventory;
