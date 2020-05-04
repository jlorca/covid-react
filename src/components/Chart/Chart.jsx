import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/services";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";
import labels from "../../labels/labels";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);
  // the previous line is the equivalent to
  // state = {
  //   dailyData: {}
  // }

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);
  // adding in the useEffect an empty array is like to have a behaviour similar to the componentdidmount: is executed only once.

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map((data) => data.date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: labels.infected,
            borderColor: "#3333FF",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: labels.deaths,
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: [labels.infected, labels.recovered, labels.deaths],
        datasets: [
          {
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `${labels.currentStatusCountry}${country}`,
        },
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
