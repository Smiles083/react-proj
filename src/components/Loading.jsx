import React from "react";

const Loading = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading delicious meals...</p>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 0",
  },
  spinner: {
    width: "45px",
    height: "45px",
    border: "4px solid #eee",
    borderTop: "4px solid #ff6b6b",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
};

export default Loading;