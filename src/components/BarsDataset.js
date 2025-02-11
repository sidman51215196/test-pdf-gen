import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset, valueFormatter } from '../dataset/weather';

const chartSetting = {
  
  width: 750,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};

export default function BarsDataset() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'london', label: 'London', valueFormatter },
          { dataKey: 'paris', label: 'Paris', valueFormatter },
          { dataKey: 'newYork', label: 'New York', valueFormatter },
          { dataKey: 'seoul', label: 'Seoul', valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
