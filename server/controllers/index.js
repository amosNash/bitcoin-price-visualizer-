const axios = require('axios');
//create func to get data from CoinDesk API
//send data back in a good format/shape
//data is Bitcoin BPI for last 31 days
//can pick another range if i want
//Bitcoin Price Index (BPI)
//this is return the last 31 days of BPI
const getBitcoinData = (req, res) => {
  axios('https://api.coindesk.com/v1/bpi/historical/close.json')
   .then(response => {
      res.send(response.data.bpi);
   })
   .catch(error => {
     console.log(error);
   })
}

module.exports = {
  getBitcoinData
}