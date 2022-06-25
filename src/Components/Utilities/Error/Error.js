const Error = ({ error }) => {
  return (
    <div>
      <p className="text-danger">{error.message}</p>
    </div>
  );
};

export default Error;
