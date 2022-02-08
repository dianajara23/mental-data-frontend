import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const chart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#F9F9F9",
          font: {
            size: 18,
          },
        },
      },
      title: {
        display: "true",
        text: "Intento de suicidio en menores de 18 años en Bogotá",
        color: "#F9F9F9",
        font: {
          size: 20,
        },
      },
    },
  };

  const labels = [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "6 a 13 años",
        data: [183, 233, 442, 541, 330, 252, 188, 216, 189],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "14 a 17 años",
        data: [559, 633, 1.022, 1.237, 802, 619, 458, 415, 446],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default chart;
