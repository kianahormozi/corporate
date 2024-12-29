import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // استفاده از useRouter برای گرفتن اسلاگ از URL
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend , ArcElement } from 'chart.js';
import { Data } from './Data'; // فرض بر این است که داده‌ها از اینجا می‌آیند

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend , ArcElement);

const ServicesPie = () => {
  const [chartPie, setChartPie] = useState(null);
  const router = useRouter(); // استفاده از useRouter برای دسترسی به URL
  const { slug } = router.query; // دریافت اسلاگ از URL

  useEffect(() => {
    if (slug) {
      // فیلتر داده‌ها بر اساس اسلاگ از URL
      const selectedData = Data.find((item) => item.dataslug === slug);
      setChartPie(selectedData?.dataPie || null); // تنظیم داده‌های چارت
    }
  }, [slug]);

  if (!chartPie) {
    return <div>در حال بارگذاری...</div>;
  }

  // داده‌های چارت
  const data = {
    labels: chartPie.label,  // برچسب‌ها برای محور X
    datasets: [
      {
        data: chartPie.value4, 
        backgroundColor: ['#FF6384', '#00c1cf', '#50485b'],
      },
      
    ],
  };

  // تنظیمات چارت
  const chartConfig = {
    type: 'pie',
    data: data,
    options: {
        responsive: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font:{
                size:9,
                
              }

            }
          },
        }
      },
  };

  // نمایش چارت
  return <div>
    <Pie 
  data={chartConfig.data} 
  options={chartConfig.options}
  height={250}
  width={250} />
  <p
    className=' pie-text pt-2 pb-2 text-right '>
      {chartPie.textPie}
  </p>
  </div>;
};

export default ServicesPie;
