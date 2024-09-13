import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './MarketOverview.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MarketOverview = () => {
  const marketData = [
    { index: 'S&P 500', value: 4185.47, change: '+0.75%' },
    { index: 'Dow Jones', value: 33875.40, change: '+0.50%' },
    { index: 'NASDAQ', value: 12390.69, change: '+0.90%' },
    { index: 'Russell 2000', value: 1832.57, change: '-0.20%' },
    { index: 'FTSE 100', value: 7908.22, change: '+0.30%' },
    { index: 'Nikkei 225', value: 28856.44, change: '+1.20%' },
    { index: 'DAX', value: 15917.74, change: '+0.40%' },
    { index: 'Hang Seng', value: 19678.17, change: '-0.60%' },
  ];

  const chartData = {
    labels: marketData.map(item => item.index),
    datasets: [
      {
        label: 'Index Value',
        data: marketData.map(item => item.value),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Market Index Values',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="market-overview">
      <h2>Major Indices</h2>
      <div className="market-indices">
        {marketData.map((item, index) => (
          <div key={index} className="market-item">
            <h3>{item.index}</h3>
            <p className="value">{item.value.toLocaleString()}</p>
            <p className={`change ${item.change.startsWith('+') ? 'positive' : 'negative'}`}>
              {item.change}
            </p>
          </div>
        ))}
      </div>
      <div className="market-chart">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default MarketOverview;