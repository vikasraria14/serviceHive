import React, {  useEffect, useState } from 'react';
import BarChart from './BarChart1'; // Import your BarChart component
import axios from 'axios';
import { config } from '../../App';
const AdminView = ({label,apiEndpoint}) => {
  const [chartData, setChartData] = useState([]);

  
  useEffect(() => {
    let fun=async()=>{
        const url = `${config.endpoint}/admin/${apiEndpoint}`;
        let data = await axios.get(url)
        setChartData(data.data)
        console.log(data.data)
    }
    fun()
  }, [apiEndpoint]);

  return (
    <div>
      <h1>Most Ordered Services</h1>
      <BarChart chartData={chartData} titleX={label} />
      
      {/* <DD/> */}
    </div>
  );
};

export default AdminView;
