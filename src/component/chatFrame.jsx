import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const BarchartFrame = () => {
  const chartRef = useRef();

  useEffect(() => {
    const boysData = [20, 34, 45, 78, 90, 45, 67, 44, 21, 67, 68, 45];
    const girlsData = [20, 56, 68, 78, 40, 78, 44, 45, 33, 96, 67, 44];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const boysDataset = {
      label: 'Males',
      data: boysData,
      backgroundColor: 'rgba(54, 162, 235, 0.6)'
    };

    const girlsDataset = {
      label: 'Girls',
      data: girlsData,
      backgroundColor: 'rgba(255, 99, 132, 0.6)'
    };

    const chartConfig = {
      type: 'bar',
      data: {
        labels: months,
        datasets: [boysDataset, girlsDataset]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10,
              suggestedMax: 100
            }
          }
        }
      }
    };

    const myChart = new Chart(chartRef.current, chartConfig);

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};


export const PieChartFrame = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = {
      labels: ['Students', 'Parents', 'Teachers'],
      datasets: [{
        label: 'Number of People',
        data: [100, 62, 32],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        hoverOffset: 4
      }]
    };

    const config = {
      type: 'pie',
      data: data
    };

    const myChart = new Chart(chartRef.current, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};




