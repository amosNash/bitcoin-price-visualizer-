import React, {useEffect} from 'react';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';


class BitCoinChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: this.props.dates,
      prices: this.props.prices,
    }
  }
  render () {
    const chart = {
      labels: this.props.dates,
      datasets: [
        {
          label: 'Historical Closing Price (last 31 days)',
          data: this.props.prices,
          borderColor: ['rgba(54, 162, 235, 0.2)'],
          backgroundColor: ['rgba(54, 162, 235, 0.2)']
        }
      ]
    }
    return (
      <div>
        <Line height={80} width={160} data={chart} />
      </div>
    )
  }

}
export default BitCoinChart;