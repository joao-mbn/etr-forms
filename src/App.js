import React from 'react';
import Form from './Form';
import Chart from './Chart';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Form />
      <Chart />
    </div >
  );
}

export default App;
