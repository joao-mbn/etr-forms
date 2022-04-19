import React from 'react';
import {
  CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis
} from 'recharts';

const operationLine = [
  { x: 0, y: 0 },
  { x: 10, y: 10 },
];
const equilibrium = [
  { x: 1, y: 2 },
  { x: 2, y: 5 },
  { x: 3, y: 8 },
  { x: 4, y: 10 },
  { x: 5, y: 11 },
];
const stages = [
  { x: 8, y: 8 },
  { x: 3.5, y: 8 },
  { x: 3.5, y: 3 },
  { x: 1.5, y: 3 },
  { x: 1.5, y: 1 },
];

export default function Chart(props) {

  return (
    <ScatterChart
      width={500}
      height={400}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid />
      <XAxis id='xAxis' type='number' dataKey='x' name='Aqueous Concentration' unit='g/L'
        label={{ value: 'Aqueous Concentration', position: 'bottom' }}
      />
      <YAxis id='yAxis' type='number' dataKey='y' name='Organic Concentration' unit='g/L'
        label={{ value: 'Organic Concentration', angle: -90, position: 'left' }}
      />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend verticalAlign='top' />
      <Scatter
        name='Operation Line'
        data={operationLine}
        fill='#8884d8'
        line
        shape='cross'
      />
      <Scatter
        name='Equilibrium'
        data={equilibrium}
        fill='#82ca9d'
        line
        shape='diamond'
      />
      <Scatter
        name='Stages'
        data={stages}
        fill='#303030'
        line
        shape='circle'
      />
    </ScatterChart>
  );
}