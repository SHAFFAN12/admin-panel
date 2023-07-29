
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const Dashboard =  (props) => {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data =  {
  labels: [ 'User', 'Product'],
  datasets: [
    {
      label: 'N.O OF ',
      data: [props.totaluser, 50],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 184, 10)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgb(0, 0, 0)',
              ],
      borderWidth: 3,
    },
  ],
};


  return( 
    <div className='mt-12'>
    
    <Pie  data={data}/>
  </div>
)
}
  
export default Dashboard
