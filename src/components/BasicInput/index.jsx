const BasicInput = ({ label, type, value, onChange, ...rest }) => {
  return (
    <div {...rest}>
      <label>{label}</label>
      <br />
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default BasicInput;
