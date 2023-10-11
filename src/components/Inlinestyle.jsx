export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const tilteStyle = {
    margin: 0,
    color: "#3b84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={tilteStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
