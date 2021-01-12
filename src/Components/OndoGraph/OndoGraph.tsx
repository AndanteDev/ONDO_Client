import React, { useState, useEffect } from "react";
import * as S from "./Style";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const OndoGraph: React.FC = () => {
  const [series, setSeries] = useState([
    {
      name: "감정온도",
      data: [36.5, 30, 36.5, 40, 36.5, 40, 40, 36.5, 30],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: 7,
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/05/2021",
        "01/06/2021",
        "01/07/2021",
        "01/08/2021",
        "01/09/2021",
        "01/10/2021",
        "01/11/2021",
        "01/12/2021",
        "01/13/2021",
      ],
      tickAmount: 10,
      labels: {
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp), "dd MMM");
        },
      },
    },
    title: {
      text: "감정 온도",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#000000",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        color: "#E9E6FC",
        gradientToColors: ["#FCD7D2"],
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [0, 100, 0, 100],
      },
    },
    markers: {
      size: 4,
      colors: ["gray"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
  });

  return (
    <S.Positioner>
      <S.Graph>
        <Chart
          options={options}
          series={series}
          type="line"
          width="600"
          height="200"
        />
      </S.Graph>
    </S.Positioner>
  );
};

export default OndoGraph;
