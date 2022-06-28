import { useCallback, useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillXCircleFill } from "react-icons/bs";
import auth from "../../../firebase.init";
const MyItem = () => {
  const [user] = useAuthState(auth);
  const [cars, setCars] = useState([]);
  const email = user?.email;
  //
  const getProducts = useCallback(
    (data) => {
      const mainData = data?.productId;

      fetch(`http://localhost:5000/productids?email=${email}`, {
        method: "POST",

        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(mainData),
      })
        .then((res) => res.json())
        .then((newData) => setCars(newData));
    },
    [email]
  );

  useEffect(() => {
    fetch(`http://localhost:5000/userInventory?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          console.log(data);
        } else {
          getProducts(data[0]);
        }
      });
  }, [email, getProducts]);
  const handleRemove = (id) => {
    const sure = window.confirm("Are you sure!");

    if (sure) {
      // remove from database inventory
      const userData = { email: email, productId: id };
      fetch(`http://localhost:5000/userInventory?email=${email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          return;
        });
      // remove from main invetory

      fetch(`http://localhost:5000/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = cars.filter((car) => car._id !== id);
          setCars(remaining);
        });
    }
  };
  return (
    <>
      <div className="text-center my-4">
        <h4>Manage your persola data</h4>
        <div className=" d-flex align-items-cetner justify-content-center">
          <div
            className="bg-dark mb-3"
            style={{ height: "5px", width: "80px", borderRadius: "10px" }}
          ></div>
        </div>
      </div>

      <Row className="bg-light py-3">
        {cars?.length !== 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Car Name</th>
                <th>Car Price</th>
                <th>Car Quantity</th>
                <th>Car Supplier</th>
                <th>Remove</th>
              </tr>
            </thead>

            {cars?.map((car, idx) => (
              <tbody key={car._id}>
                <tr>
                  <td>{idx + 1}</td>
                  <td>{car?.name}</td>
                  <td>{car?.price}</td>
                  <td>{car?.quantity}</td>
                  <td>{car?.supllierName}</td>
                  <td>
                    <Button
                      variant="danger"
                      className="d-flex align-items-center justif-content-center"
                      onClick={() => handleRemove(car?._id)}
                    >
                      <BsFillXCircleFill />
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        ) : (
          <h3 className="align-self-center text-center">You got no data </h3>
        )}
      </Row>
    </>
  );
};

export default MyItem;
