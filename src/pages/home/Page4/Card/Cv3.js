import React from "react";
import Card from "@mui/material/Card";
import DataBox1 from "./DataBox1";

function Card3() {
  return (
    <Card
      style={{
        backgroundColor: "#13181d",
        width: 829,
        height: 307,
        margin: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ margin: 20, textSizeAdjust: 16 }}> 검사 불합격 율</div>
    <DataBox1/>
    </Card>
  );
}

export default Card3;
