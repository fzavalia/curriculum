const Space = ({ amount }) => (
  <div style={{ marginTop: amount, marginLeft: amount }} />
);

const Line = ({ amount }) => (
  <React.Fragment>
    <Space amount={amount / 2} />
    <div
      style={{
        height: 1,
        width: "100%",
        maxWidth: 700,
        backgroundImage:
          "linear-gradient(to right, #00000000, white, #00000000)"
      }}
    />
    <Space amount={amount / 2} />
  </React.Fragment>
);

export default { Space, Line };
