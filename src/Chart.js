import React from 'react';
import './Chart.css';

class Chart extends React.Component {

  componentDidMount() {
    const context = this.context;
    context.beginPath();
    context.arc(500, 200, 100, 0, 2 * Math.PI);
    context.stroke();
  }

  render() {
    return (
      <div className="chart">
        <canvas className='canvas' id='1' height='500' width='800'
          ref={(context) => this.context = context?.getContext('2d')}
        >
        </canvas>
      </div>
    )
  }
}

export default Chart;