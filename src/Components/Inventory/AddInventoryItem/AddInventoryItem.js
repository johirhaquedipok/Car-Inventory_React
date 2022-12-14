import { Col, Image, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
const AddInventoryItem = () => {
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // insertedId
  // add to usersdb

  const addUserToDb = (id) => {
    const email = user?.email;
    const userData = { email: email, productId: id };
    fetch(`https://carinvento.herokuapp.com/userInventory?email=${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  // on submit data
  const onSubmit = (data) => {
    // /post data to the server

    fetch(`https://carinvento.herokuapp.com/inventories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => addUserToDb(data.insertedId));

    reset();
  };
  return (
    <>
      <div className="text-center my-4">
        <h4>Add Some data</h4>
        <div className=" d-flex align-items-cetner justify-content-center">
          <div
            className="bg-dark mb-3"
            style={{ height: "5px", width: "80px", borderRadius: "10px" }}
          ></div>
        </div>
        <p className="text-info">Make sure all fields are filled</p>
      </div>

      <Row>
        <Col md={6}>
          <Image
            fluid
            src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="carimage"
          />
        </Col>
        <Col md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Car Name{" "}
              </label>

              {/* use aria-invalid to indicate field contain error */}
              <input
                className="form-control"
                id="name"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", { required: true, maxLength: 30 })}
              />

              {/* use role="alert" to announce the error message */}
              {errors.name && errors.name.type === "required" && (
                <span className="text-danger" role="alert">
                  This is required
                </span>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <span className="text-danger" role="alert">
                  Max length exceeded
                </span>
              )}
            </div>
            {/* car price */}
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Car Price{" "}
              </label>

              {/* use aria-invalid to indicate field contain error */}
              <input
                className="form-control"
                id="price"
                aria-invalid={errors.price ? "true" : "false"}
                {...register("price", { required: true, maxLength: 30 })}
              />

              {/* use role="alert" to announce the error message */}
              {errors.price && errors.price.type === "required" && (
                <span className="text-danger" role="alert">
                  This is required
                </span>
              )}
              {errors.price && errors.price.type === "maxLength" && (
                <span className="text-danger" role="alert">
                  Max length exceeded
                </span>
              )}
            </div>
            {/* car quantity */}
            <div className="mb-3">
              <label className="form-label" htmlFor="quantity">
                Car Quantity{" "}
              </label>

              {/* use aria-invalid to indicate field contain error */}
              <input
                className="form-control"
                id="quantity"
                aria-invalid={errors.quantity ? "true" : "false"}
                {...register("quantity", { required: true, maxLength: 30 })}
              />

              {/* use role="alert" to announce the error message */}
              {errors.quantity && errors.quantity.type === "required" && (
                <span className="text-danger" role="alert">
                  This is required
                </span>
              )}
              {errors.quantity && errors.quantity.type === "maxLength" && (
                <span className="text-danger" role="alert">
                  Max length exceeded
                </span>
              )}
            </div>
            {/* car supllierName */}
            <div className="mb-3">
              <label className="form-label" htmlFor="supllierName">
                Car supllierName{" "}
              </label>

              {/* use aria-invalid to indicate field contain error */}
              <input
                className="form-control"
                id="supllierName"
                aria-invalid={errors.supllierName ? "true" : "false"}
                {...register("supllierName", { required: true, maxLength: 30 })}
              />

              {/* use role="alert" to announce the error message */}
              {errors.supllierName && errors.supllierName.type === "required" && (
                <span className="text-danger" role="alert">
                  This is required
                </span>
              )}
              {errors.supllierName && errors.supllierName.type === "maxLength" && (
                <span className="text-danger" role="alert">
                  Max length exceeded
                </span>
              )}
            </div>
            {/* car Image */}
            <div className="mb-3">
              <label className="form-label" htmlFor="img">
                Car img link
              </label>

              {/* use aria-invalid to indicate field contain error */}
              <input
                className="form-control"
                id="img"
                aria-invalid={errors.img ? "true" : "false"}
                {...register("img", { required: true })}
              />

              {/* use role="alert" to announce the error message */}
              {errors.img && errors.img.type === "required" && (
                <span className="text-danger" role="alert">
                  This is required
                </span>
              )}
            </div>

            {/* car Description */}
            <div className="mb-3">
              <label className="form-label" htmlFor="description">
                Car Description{" "}
              </label>

              {/* use aria-invalid to indicate field contain error */}
              <input
                className="form-control"
                id="description"
                aria-invalid={errors.description ? "true" : "false"}
                {...register("description", { required: true, maxLength: 200 })}
              />

              {/* use role="alert" to announce the error message */}
              {errors.description && errors.description.type === "required" && (
                <span className="text-danger" role="alert">
                  This is required
                </span>
              )}
              {errors.description && errors.description.type === "maxLength" && (
                <span className="text-danger" role="alert">
                  Max length exceeded
                </span>
              )}
            </div>
            <input className="form-control" type="submit" />
          </form>
        </Col>
      </Row>
    </>
  );
};

export default AddInventoryItem;
