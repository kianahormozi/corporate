import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // استفاده از useRouter برای گرفتن اسلاگ از URL
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Data } from './Data'; // فرض بر این است که داده‌ها از اینجا می‌آیند

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ServicesBar = () => {
  const [chartData, setChartData] = useState(null);
  const router = useRouter(); // استفاده از useRouter برای دسترسی به URL
  const { slug } = router.query; // دریافت اسلاگ از URL

  useEffect(() => {
    if (slug) {
      // فیلتر داده‌ها بر اساس اسلاگ از URL
      const selectedData = Data.find((item) => item.dataslug === slug);
      setChartData(selectedData?.dataChart || null); // تنظیم داده‌های چارت
    }
  }, [slug]);

  if (!chartData) {
    return <div>در حال بارگذاری...</div>;
  }

  // داده‌های چارت
  const data = {
    labels: chartData.labels,  // برچسب‌ها برای محور X
    datasets: [
      {
        label: 'Value 1',
        data: chartData.value1, // داده‌های Value 1
        borderColor: 'rgb(20, 199, 151)',
        backgroundColor: 'rgba(20, 199, 151, 1)',
        borderWidth: 1,
        borderSkipped: false,
      },
      {
        label: 'Value 2',
        data: chartData.value2, // داده‌های Value 2
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        borderSkipped: false,
      },
    ],
  };

  // تنظیمات چارت
  const chartConfig = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top', // موقعیت legend در بالای چارت
        },
      },
      scales: {
        x: {
          beginAtZero: true, // شروع از صفر در محور X
        },
        y: {
          beginAtZero: true, // شروع از صفر در محور Y
        },
      },
    },
  };

  // نمایش چارت
  return <Bar 
    data={chartConfig.data} 
    options={chartConfig.options}
    height={150}
    width={200}
    className='pb-3 sm-card-padding'
  />;
};

export default ServicesBar;
