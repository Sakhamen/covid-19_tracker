import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getData = async (country) => {
  let changeableurl = url;

  if (country) {
    changeableurl = `${url}/countries/${country}`;
  }

  try {
    const res = await axios.get(changeableurl);
    const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(changeableurl);
    return  { confirmed, deaths, recovered, lastUpdate };
  } catch (e) {
    return e;
  }
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const result = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
      recovered: dailyData.recovered.total
    }));

    return result;
  } catch (e) {
    return e;
  }
};

export const getCountries = async () => {
  try {
    const { data: { countries }} = await axios.get(`${url}/countries`);
    return countries.map(country => country.name);
  } catch (e) {
    return e;
  }
}
