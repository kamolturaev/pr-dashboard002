import React from "react";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Chart2 from "../Chart/Chart2";

function Card2() {
  return (
    <Card
      style={{
        backgroundColor: "#13181d",
        width: 396,
        height: 306,
        margin: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          margin: 14,
          textSizeAdjust: 16,
        }}
      >
        <div> 수율 추세</div>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Checkbox />
          <p>20라인</p>
          <Checkbox />
          <p>21라인</p>
        </div>
      </div>

      <div style={{ marginLeft: 24 }}>
        <Chart2 />
      </div>
      <div style={{ marginTop: 30, marginLeft: 24, fontSize: 14 }}>
        <tag style={{ color: "#ecb328" }}> 20라인 ERP</tag>
        <tag style={{ color: "#ffa482" }}> 20라인 R&D</tag>
        <tag style={{ color: "#809ee0" }}> 21라인 ERP</tag>
        <tag style={{ color: "#2b79ff" }}> 21라인 R&D</tag>
      </div>
    </Card>
  );
}

export default Card2;
