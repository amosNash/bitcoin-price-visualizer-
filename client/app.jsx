import React from 'react';
import axios from 'axios';
import BitCoinChart from './chart.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRange: [],
      closingPrices: []
    }
    this.getClosingPrice = this.getClosingPrice.bind(this);
    this.renderChart = this.renderChart.bind(this);
  }

componentDidMount () {
    this.getClosingPrice();
}

getClosingPrice () {
  axios.get('/closingPrice')
   .then(resp => {
     this.renderChart(resp.data);
   })
   .catch(error => {
     console.log('ERROR', error)
   })
}

renderChart (data) {
  //send dates and prices in arrays
  let dateRange = [];
  let allClosingPrices = [];
  for (let date in data) {
    dateRange.push(date);
    allClosingPrices.push(data[date]);
  }

  this.setState({
    dateRange: dateRange,
    closingPrices: allClosingPrices
  })

}

  render () {
    return (
      <div>
        <div>Bitcoin USD (BTC-USD)</div>
        <BitCoinChart dates={this.state.dateRange} prices={this.state.closingPrices}/>
        <p> "Powered by CoinDesk"</p>
      </div>
    )
  }


}

export default App;