import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleInventory = () => {
  const { id } = useParams();

  const [cars, setCars] = useState({});
  console.log(cars);
  useEffect(() => {
    fetch(`http://localhost:5000/inventories/${id}`)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [id]);
  return <div>{id} hello</div>;
};

export default SingleInventory;
