export default ({ children, style }) => (
  <React.Fragment>
    <div style={style || {}}>{children}</div>
    <style jsx>{`
      div {
        animation: fadein 1s;
      }
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}</style>
  </React.Fragment>
);
