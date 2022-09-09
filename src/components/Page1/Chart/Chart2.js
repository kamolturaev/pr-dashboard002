import React from "react";
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  // Export,
  Legend,
  Margin,
  Size,
  // Title,
  // Subtitle,
  Tooltip,
  // Grid,
} from "devextreme-react/chart";

import service from "./data2";

const countriesInfo = service.getCountriesInfo();
const energySources = service.getEnergySources();
const linecolor = [ '#ecb328','#ffa482', '#809ee0','#2b79ff',]
const Chart2 = () => {
  return (
    <div>
      <Chart palette={linecolor} dataSource={countriesInfo}>
        <Size height="172" />
        <CommonSeriesSettings argumentField="country" />
        {energySources.map((item) => (
          <Series key={item.value} valueField={item.value} name={item.name} />
        ))}
        <Margin bottom={20} />
        <ArgumentAxis
          valueMarginsEnabled={false}
          discreteAxisDivisionMode="crossLabels"
        >
          {/* <Grid visible={true} /> */}
        </ArgumentAxis>
        <Legend visible={false} />

        {/* <Tooltip enabled={true} /> */}
      </Chart>
    </div>
  );
};

export default Chart2;
