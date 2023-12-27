'use client';
import React from 'react'
import {BarChart} from '@mui/x-charts/BarChart';
const chartSetting = {
  xAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 400,
};

export default function UsersChart({dataset}) {
  return (
    <div className=''>
      <p className='font-bold my-4'>Recientes usuarios Registrados</p>
      <div className='bg-white w-auto p-2 rounded-lg'>
      <BarChart
        dataset={dataset}
        yAxis={[{scaleType:'band', dataKey:'nombreMes'}]}
        xAxis={[{label:"Mes del año"}]}
        series={[
          {dataKey : 'TotalUsuariosRegistrados', label: 'Usuarios', valueFormatter:(value)=>value}
        ]}
        layout='horizontal'
        width={500}
        height={400}
      /> 

      </div>
    </div>
  )
};