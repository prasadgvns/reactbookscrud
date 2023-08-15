const Error = ({ message }) => {
  return (
    <div className="alert alert-danger">
      <strong>{message}</strong>
    </div>
  );
};

export default Error;
