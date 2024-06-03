const axios = require('axios');

const API_KEY = process.env.CURRENCY_CONVERSION_API_KEY; // Replace with your actual API key
const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/';

async function convert(amount, toCurrency) {
  try {
    const response = await axios.get(`${BASE_URL}RWF`, { params: { apiKey: API_KEY } });
    const rates = response.data.rates;
    const rate = rates[toCurrency];
    if (!rate) {
      throw new Error(`Unable to find rate for currency: ${toCurrency}`);
    }
    return amount * rate;
  } catch (error) {
    console.error('Currency conversion error:', error);
    throw error;
  }
}

module.exports = {
  convert,
};
