import Card from "@mui/material/Card";
import React from "react";

import { Button } from "devextreme-react/button";
import RadioGroup from "devextreme-react/radio-group";
import DataBox from "./DataBox";
import { priorities } from "./RadioData.js";
// import 'devextreme/dist/css/dx.light.css';

function Card1() {
  return (
    <Card
      style={{
        backgroundColor: "#13181d",
        width: 397,
        height: 307,
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
        <div style={{}}> 조회기간 </div>

        <DataBox />
      </div>

      <div
        style={{ display: "flex", justifyContent: "Right", marginRight: 14 }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "Right",
          marginRight: 14,
          marginTop: 2,
        }}
      >
        <Button
          style={{
            fontSize: 8,
            backgroundColor: "#97c15c",
            width: 71,
            height: 30,
            borderRadius: "4px",
            marginTop: "20px",
          }}
          text="지난7일"
        />

        <div
          style={{ display: "flex", justifyContent: "Right", margin: 6 }}
        ></div>
        <Button
          style={{
            fontSize: 8,
            backgroundColor: "#2c3034",
            width: 71,
            height: 30,
            borderRadius: "4px",
            marginTop: "20px",
          }}
          text="지남30일"
        />

        <div
          style={{ display: "flex", justifyContent: "Right", margin: 6 }}
        ></div>

        <Button
          style={{
            fontSize: 8,
            backgroundColor: "#2c3034",
            width: 71,
            height: 30,
            borderRadius: "4px",
            marginTop: "20px",
          }}
          text="지난 1년간"
        />
      </div>

      <div style={{ margin: 12, textSizeAdjust: 6 }}> 조회기준 </div>

      <RadioGroup
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: 0,
        }}
        items={priorities}
        defaultValue={priorities[4]}
        layout="horizontal"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 18,
        }}
      >
        <Button
          style={{
            fontSize: "0.8rem",
            backgroundColor: "#FF7A33",
            width: 149,
            height: 29,
            borderRadius: "4px",
          }}
          text="조회 "
        />
        <Button
          style={{
            fontSize: "0.8rem",
            backgroundColor: "#FF7A33",
            width: 149,
            height: 29,
            borderRadius: "4px",
          }}
          text="수율 분석 상세 보기"
        />
      </div>
    </Card>
  );
}

export default Card1;
