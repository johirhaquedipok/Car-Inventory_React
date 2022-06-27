const Error = ({ error }) => {
  return (
    <div>
      <p className="text-danger">
        {error.message ? error.message : "Some Error Happened"}
      </p>
    </div>
  );
};

export default Error;
